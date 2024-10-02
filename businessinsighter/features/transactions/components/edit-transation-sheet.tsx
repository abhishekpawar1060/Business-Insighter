import { z } from "zod";

import { TransactionForm } from "@/features/transactions/components/transaction-form";
import { insertTransactionSchema } from "@/db/schema";

import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";
import { useGetTransaction } from "@/features/transactions/api/use-get-transaction";
import { useEditTransaction } from "@/features/transactions/api/use-edit-transaction";
import { useDeleteTransaction } from "@/features/transactions/api/use-delete-transaction";

import { useCreateCategory } from "@/features/categories/api/user-create-category";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useCreateAccount } from "@/features/accounts/api/user-create-account";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

import { useConfirm } from "@/hooks/use-confirm";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";



const formSchema = insertTransactionSchema.omit({
    id: true,
});

type FormValues = z.input<typeof formSchema>;

export const EditTransationSheet = () => {

    const { isOpen, onClose, id} = useOpenTransaction();

    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to delete this transaction."
    );

    const transationQuery = useGetTransaction(id);
    const editMutation = useEditTransaction(id);
    const deleteMutation = useDeleteTransaction(id);


    const categoryQuery = useGetCategories();
    const categoryMutation = useCreateCategory()

    const onCreateCategory = (name: string) => categoryMutation.mutate({
        name
    })

    const categoryOptions = (categoryQuery.data ?? []).map((category) => ({
        label: category.name,
        value: category.id,
    }));

    const accountQuery = useGetAccounts();
    const accountMutation = useCreateAccount()

    const onCreateAccount = (name: string) => accountMutation.mutate({
        name
    })

    const accountOptions = (accountQuery.data ?? []).map((account) => ({
        label: account.name,
        value: account.id,
    }));



    const isPending = 
        editMutation.isPending || 
        deleteMutation.isPending ||
        transationQuery.isLoading ||
        categoryMutation.isPending ||
        accountMutation.isPending;

    const isLoading = 
        transationQuery.isLoading ||
        categoryQuery.isLoading || 
        accountQuery.isLoading;

    const onSubmit = (values: FormValues) => {
        editMutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    const onDelete = async () => {
        const ok = await confirm();

        if(ok) {
            deleteMutation.mutate(undefined, {
                onSuccess: () => {
                    onClose();
                }
            });
        }
    };

    const defaultValues = transationQuery.data ? {
        accountId: transationQuery.data.accountId,
        categoryId: transationQuery.data.categoryId,
        amount: transationQuery.data.amount.toString(),
        date: transationQuery.data.date 
            ? new Date(transationQuery.data.date) 
            : new Date(),
        payee: transationQuery.data.payee,
        notes: transationQuery.data.notes,
    } : {
        accountId: "",
        categoryId: "",
        amount: "",
        date: new Date(),
        payee: "",
        notes: "",
    };

    return (
        <>
            <ConfirmDialog />
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent className="space-y-4">
                    <SheetHeader>
                        <SheetTitle>
                            Edit Transactions
                        </SheetTitle>
                        <SheetDescription>
                            Edit an existing Transactions.
                        </SheetDescription>
                    </SheetHeader>
                    {isLoading 
                        ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="size-4 text-muted-foreground animate-spin"/>
                            </div>
                        ) : (
                            <TransactionForm
                                id={id}
                                defaultValues={defaultValues}
                                onSubmit={onSubmit}
                                onDelete={onDelete}
                                disabled={isPending}
                                categoryOptions={categoryOptions}
                                onCreateCategory={onCreateCategory}
                                accountOptions={accountOptions}
                                onCreateAccount={onCreateAccount}
                            />
                        )
                    }
                    
                </SheetContent>
            </Sheet>
        </>
    );
};

