import { getEntryByUrl } from "@/services";
import ReactMain from "@/app/react";
import type { Metadata } from "next";

type PropsPage = {
  params: Promise<{ slug: string }>;
};

const configEntry = {
  type: "landing_page",
  locale: "it",
  fields: ["dynamic", "dynamic.info.modal", "sticky", "sticky.info.modal"],
  jsonRtePaths: [""],
};

export async function generateMetadata({
  params,
}: PropsPage): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const pageData = await getEntryByUrl(
    configEntry.type,
    configEntry.locale,
    "/" + slug,
    configEntry.fields,
    configEntry.jsonRtePaths
  );

  if (!pageData) {
    return {
      title: "Page not found",
      description: "",
    };
  }

  return {
    title: pageData.seo.title,
    description: pageData.seo.description,
    openGraph: {
      title: pageData.seo.title,
      description: pageData.seo.description,
    },
  };
}

export default async function Page({ params }: PropsPage) {
  const { slug } = await params;

  const pageData = await getEntryByUrl(
    configEntry.type,
    configEntry.locale,
    "/" + slug,
    configEntry.fields,
    configEntry.jsonRtePaths
  );

  // Render data...
  return <ReactMain pageData={pageData} />;
}
