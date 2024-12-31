import Image from "next/image";
import type { RelatedCampaign } from "../types/campaign";
import { formatCurrency } from "../lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface RelatedCampaignsProps {
  campaigns: RelatedCampaign[];
}

export function RelatedCampaigns({ campaigns }: RelatedCampaignsProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold ">
        Related <span className="text-emerald-600">Campaigns</span>
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="w-[300px] flex-shrink-0 ">
            <div className="relative h-[200px] border-4">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {campaign.location}
                  </span>
                  <span>•</span>
                  <span className="text-sm text-muted-foreground">
                    {campaign.daysLeft} Days Left
                  </span>
                </div>
                <h3 className="font-semibold">{campaign.title}</h3>
                <div className="flex gap-2">
                  {campaign.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="text-lg font-bold text-primary">
                {formatCurrency(campaign.currentAmount)}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
