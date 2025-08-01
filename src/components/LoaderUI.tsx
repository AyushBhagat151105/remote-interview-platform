import { Skeleton } from "@/components/ui/skeleton";

function LoaderUI() {
    return (
        <div className="container max-w-7xl mx-auto p-6">
            {/* Welcome Skeleton */}
            <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
                <Skeleton className="h-10 w-1/3 mb-3" />
                <Skeleton className="h-5 w-2/3" />
            </div>

            {/* Grid Skeleton */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-xl bg-muted/20 p-6 border border-muted/40 shadow-sm space-y-4"
                    >
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoaderUI;
