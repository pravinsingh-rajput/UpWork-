import Image from "next/image";
import { formatCurrency, calculateProgress } from "../lib/utils";
import type { Campaign } from "../types/campaign";

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  return (
    <div className="flex w-[300px] flex-none flex-col overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative h-[200px]">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {campaign.location}
          <span>•</span>
          <span>{campaign.daysLeft} Days Left</span>
        </div>
        <h3 className="mb-2 flex-1 font-semibold text-gray-900">
          {campaign.title}
        </h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {campaign.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <div className="mb-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-emerald-500"
              style={{
                width: `${calculateProgress(
                  campaign.collected || 0,
                  campaign.goalAmount
                )}%`,
              }}
            />
          </div>
          <div className="font-semibold text-emerald-600">
            {formatCurrency(campaign.collected || 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
