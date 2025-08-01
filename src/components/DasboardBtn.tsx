"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { SparklesIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DashboardBtn() {
    const { isCandidate, isLoading } = useUserRole();

    if (isLoading) {
        return (
            <div className="w-[100px] h-8">
                <Skeleton className="w-full h-full rounded-md" />
            </div>
        );
    }

    if (isCandidate) return null;

    return (
        <Link href="/dashboard">
            <Button className="gap-2 font-medium hover:cursor-pointer" size="sm">
                <SparklesIcon className="size-4" />
                Dashboard
            </Button>
        </Link>
    );
}

export default DashboardBtn;
