"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { ZCOOL_QingKe_HuangYou } from "next/font/google";


export default function Home() {

  const { onOpen } = useNewAccount();

  return (

    <div>
      DashboardPage
    </div>   
  );
};
