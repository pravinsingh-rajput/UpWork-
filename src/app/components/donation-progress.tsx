import { formatCurrency, calculateProgress } from "../lib/utils";

interface DonationProgressProps {
  currentAmount: number;
  goalAmount: number;
  daysLeft: number;
}

export function DonationProgress({
  currentAmount,
  goalAmount,
  daysLeft,
}: DonationProgressProps) {
  const progress = calculateProgress(currentAmount, goalAmount);

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex justify-between">
        <div>
          <p className="text-sm text-gray-500">Raised</p>
          <p className="text-2xl font-bold text-emerald-600">
            {formatCurrency(currentAmount)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Goal</p>
          <p className="text-2xl font-bold text-gray-900">
            {formatCurrency(goalAmount)}
          </p>
        </div>
      </div>
      <div className="mb-2 h-2.5 w-full rounded-full bg-gray-200">
        <div
          className="h-2.5 rounded-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {daysLeft} Days Left
      </div>
      <button className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-700">
        Donate Now
      </button>
      <button className="mt-3 w-full rounded-lg px-4 py-3 text-center font-semibold text-emerald-600 hover:bg-gray-50">
        Share
      </button>
    </div>
  );
}
