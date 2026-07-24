type Props = {
  value: number;
};

export default function ProgressBar({
  value,
}: Props) {
  return (
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-blue-500 transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}