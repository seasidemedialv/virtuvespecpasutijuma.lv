import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { pagesBySlug, seoPages } from "@/lib/site-data";

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesBySlug[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}/` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}/`,
      images: ["/images/hero-kitchen.webp"],
    },
  };
}

export default async function DynamicServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pagesBySlug[slug];
  if (!page) notFound();
  return <ServicePage page={page} />;
}
