"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="">
      <div className="container mx-auto px-8 max-w-7xl bg-gray-900 py-14 rounded-3xl ">
        <div className="mx-auto flex items-center justify-between max-w-7xl">
          <div className="w-2/5">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Subscribe our newsletter
            </h2>
            <p className="mb-8 text-gray-400">
              We will provide detailed information about our services, types of
              work, and top projects. We will calculate the cost and prepare a
              commercial proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 w-2/5">
            <input
              type="email"
              placeholder="Input your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
