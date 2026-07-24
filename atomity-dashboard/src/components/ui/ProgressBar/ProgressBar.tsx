import { cn } from "../../../utils/cn";

type Props = {
  value: number;
  className?: string;
  label?: string;
  showValueText?: boolean;
};

export default function ProgressBar({
  value,
  className,
  label,
  showValueText = false,
}: Props) {
  const percentage = Math.min(100, Math.max(0, value));

  // Determine bar color based on percentage values (Cloud dashboard style)
  const barColor =
    percentage >= 85
      ? "bg-danger"
      : percentage >= 70
      ? "bg-warning"
      : "bg-brand";

  return (
    <div className={cn("w-full space-y-2.5", className)}>
      {(label || showValueText) && (
        <div className="flex items-center justify-between text-xs font-medium text-text-secondary select-none">
          <span>{label}</span>
          {showValueText && <span className="font-mono">{percentage}%</span>}
        </div>
      )}
      <div 
        className="relative h-2 w-full overflow-hidden rounded-full bg-white/5 border border-white/5"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "Resource usage progress"}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            barColor
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}