import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import type { MenuItem } from "../types";

const menuItems: { title: string; items: MenuItem[] }[] = [
  {
    title: "MENU",
    items: [
      { label: "Donation", href: "/donation" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "News", href: "/news" },
      { label: "Aid Request", href: "/aid-request" },
    ],
  },
  {
    title: "INFO",
    items: [
      { label: "Terms and Condition", href: "/terms" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Financial Reports", href: "/financial-reports" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="space-y-4 text-sm text-gray-600">
              <p>(+60) 16 205 1890</p>
              <p>hello@iltizamrelief.com</p>
              <p className="max-w-56">
                Suite 11-01, First Floor D&apos;Bayu Complex, Jalan Serambi
                UB/24, Bukit Jelutong, 40150 Shah Alam, Selangor
              </p>
            </div>
          </div>
          {menuItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-emerald-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-between border-t py-8">
          <p className="text-sm text-gray-600">© 2023 — Copyright</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-emerald-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-600">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-600">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
