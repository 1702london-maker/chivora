import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Chivora — D365 Data Migration Specialists",
  description: "Nine ways to engage Chivora for your D365 data migration.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-8">
        <ServicesGrid />
      </main>
      <Footer />
    </>
  );
}
