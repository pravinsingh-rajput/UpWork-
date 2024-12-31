import Link from "next/link";
import { ImageCarousel } from "./components/image-carousel";
import { DonationProgress } from "./components/donation-progress";
import { DonorsList } from "./components/donors-list";
import { CampaignCard } from "./components/campaign-card";
import { Newsletter } from "./components/newsletter";
import { Footer } from "./components/footer";

const campaignImages = ["/assets/carousel1.jpg", "/assets/carousel2.jpg"];

const recentDonors = [
  { name: "Anonymous", amount: 50, avatar: "/assets/Anonymous.png" },
  {
    name: "Fatima",
    amount: 120,
    avatar: "/assets/fatima.jpg",
  },
  { name: "Adil", amount: 10, avatar: "/assets/adil.jpg" },
  { name: "Ummi", amount: 100, avatar: "/assets/Ummi.jpg" },
];

const relatedCampaigns = [
  {
    id: "1",
    title: "Palestine Solidarity with Shaykh Alaa El Sayed",
    location: "Palestine",
    daysLeft: 31,
    currentAmount: 4120,
    goalAmount: 5000,
    collected: 4120,
    tags: ["Emergency Relief"],
    image: "/assets/campaign1.png",
  },
  {
    id: "2",
    title: "Alleviate The Hunger People Of Yemen",
    location: "Yemen",
    daysLeft: 21,
    currentAmount: 14120,
    goalAmount: 20000,
    collected: 14120,
    tags: ["Food Aid"],
    image: "/assets/campaign2.png",
  },
  {
    id: "3",
    title: "Flood Relief Begins With The Onset Of Monsoon",
    location: "Malaysia",
    daysLeft: 1,
    currentAmount: 10000,
    goalAmount: 15000,
    collected: 10000,
    tags: ["Food Aid", "Emergency Relief"],
    image: "/assets/campaign3.png",
  },
  {
    id: "4",
    title: "Feed Sri Lanka",
    location: "Sri Lanka",
    daysLeft: 31,
    currentAmount: 2120,
    goalAmount: 5000,
    collected: 2120,
    tags: ["Food Aid"],
    image: "/assets/campaign4.png",
  },
];

export default function CampaignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-1 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600">
            Donation
          </Link>
          <span>/</span>
          <span className="text-emerald-600">Winter Aid - Keep Gaza Warm</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                Winter Aid - Keep Gaza Warm
              </h1>
            </div>
            <ImageCarousel images={campaignImages} />
            <div className="flex flex-col  gap-4">
              <div className="flex items-center gap-2 text-lg text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Gaza, Palestine
              </div>
              <div className="flex gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-sm font-medium text-emerald-600">
                  Emergency Relief
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-sm font-medium text-emerald-600">
                  Food Aid
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <DonationProgress
              currentAmount={5500}
              goalAmount={10000}
              daysLeft={32}
            />
            <DonorsList donors={recentDonors} />
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-12">
          <div className="mb-6 flex gap-8 border-b">
            <button className="border-b-2 border-emerald-600 pb-4 font-semibold text-emerald-600">
              Story
            </button>
            <button className="pb-4 font-semibold text-gray-500 hover:text-gray-900">
              Update
            </button>
          </div>
          <div className="prose max-w-none text-black space-y-4 leading-7">
            <p>
              We, the Iltizam Relief Society, would like to thank all of you for
              your contribution and support which has made the delivery of 3,000
              liters of diesel to the Beit Al Khair medical clinic in Gaza City,
              Palestine a success.
            </p>
            <p>
              The health situation in Gaza is worsening as a result of the
              continuous attacks and bombings. Hospitals and clinics, which
              should be the main source of support, are now facing huge
              challenges to continue operating.
            </p>
            <p>
              In our efforts to help, the diesel that has been channeled will be
              a lifesaver, ensuring energy supply for clinics, and enabling the
              use of essential medical equipment. Therefore, we are very happy
              to share videos and pictures during the diesel distribution
              process at the Beit Al Khair clinic. This is the result of the
              hard work of our volunteers, who are dedicated to ensuring that
              every step of the delivery runs smoothly and safely.
            </p>
          </div>
        </div>

        {/* Related Campaigns */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Related Campaign
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {relatedCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
