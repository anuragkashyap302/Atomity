import { cn } from "../../../utils/cn";

type Props = {
  className?: string;
};

export default function Skeleton({ className }: Props) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-white/5 border border-white/5",
        className
      )}
    />
  );
}

export function ClusterCardSkeleton() {
  return (
    <div className="rounded-xl border border-border-primary bg-surface/20 p-6 space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-5 w-28 rounded bg-white/5" />
        <div className="h-4 w-16 rounded bg-white/5" />
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-10 rounded bg-white/5" />
            <div className="h-3 w-8 rounded bg-white/5" />
          </div>
          <div className="h-1.5 w-full rounded bg-white/5" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-10 rounded bg-white/5" />
            <div className="h-3 w-8 rounded bg-white/5" />
          </div>
          <div className="h-1.5 w-full rounded bg-white/5" />
        </div>
      </div>
      
      <div className="h-7 w-20 rounded bg-white/5" />
    </div>
  );
}

export function NamespaceCardSkeleton() {
  return (
    <div className="rounded-xl border border-border-primary bg-surface/20 p-5 space-y-4 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-5 w-32 rounded bg-white/5" />
        <div className="h-5 w-16 rounded bg-white/5" />
      </div>
      <div className="space-y-2">
        <div className="h-1.5 w-full rounded bg-white/5" />
        <div className="h-1.5 w-3/4 rounded bg-white/5" />
      </div>
    </div>
  );
}

export function PodCardSkeleton() {
  return (
    <div className="rounded-xl border border-border-primary bg-surface/20 p-5 flex items-center justify-between animate-pulse">
      <div className="space-y-2">
        <div className="h-4.5 w-40 rounded bg-white/5" />
        <div className="h-4 w-16 rounded bg-white/5" />
      </div>
      <div className="h-1.5 w-32 rounded bg-white/5" />
    </div>
  );
}