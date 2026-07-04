import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SourceSystemPageTemplate } from "@/components/source-system/SourceSystemPageTemplate";
import { SOURCE_SYSTEMS_CONTENT, getSourceSystemBySlug } from "@/lib/content/sourceSystems";

export function generateStaticParams() {
  return SOURCE_SYSTEMS_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSourceSystemBySlug(slug);
  if (!system) return {};

  return {
    title: `${system.name} to Dynamics 365 Data Migration | Chivora`,
    description: system.promise,
  };
}

export default async function SourceSystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = getSourceSystemBySlug(slug);
  if (!system) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${system.name} to Dynamics 365 Data Migration`,
    description: system.promise,
    provider: {
      "@type": "ProfessionalService",
      name: "Chivora",
    },
    areaServed: "GB",
    serviceType: "D365 Data Migration",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Source Systems", item: "/source-systems" },
      { "@type": "ListItem", position: 2, name: system.name, item: `/source-systems/${system.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SourceSystemPageTemplate system={system} />
    </>
  );
}
