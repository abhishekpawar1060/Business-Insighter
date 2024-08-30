"use client"

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";

export const SheetProvider = () => {

    const isMouted = useMountedState();

    if(!isMouted) return null;

    return (
        <>
            <NewAccountSheet />
        </>
    );
};