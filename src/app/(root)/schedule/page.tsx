"use client";

import { useEffect } from "react";
import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

function SchedulePage() {
    const router = useRouter();

    const { isInterviewer, isLoading } = useUserRole();

    useEffect(() => {
        if (!isLoading && !isInterviewer) {
            router.replace("/");
        }
    }, [isLoading, isInterviewer, router]);

    if (isLoading) return <LoaderUI />;
    if (!isInterviewer) return null;

    return <InterviewScheduleUI />;
}
export default SchedulePage;