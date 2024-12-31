import Image from "next/image";
import { formatCurrency } from "../lib/utils";
import type { Donor } from "../types";

interface DonorsListProps {
  donors: Donor[];
}

export function DonorsList({ donors }: DonorsListProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">
          Recent Donateur
        </h3>
        <span className="text-sm text-gray-500">Messages</span>
      </div>
      <div className="space-y-4">
        {donors.map((donor, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                {donor.avatar ? (
                  <Image
                    src={donor.avatar}
                    alt={donor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
                    {donor.name[0]}
                  </div>
                )}
              </div>
              <span className="font-medium text-gray-900">{donor.name}</span>
            </div>
            <span className="font-semibold text-gray-900">
              {formatCurrency(donor.amount)}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full text-center text-sm font-semibold text-emerald-600 hover:text-emerald-700">
        See More
      </button>
    </div>
  );
}
