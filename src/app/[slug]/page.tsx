import { getEntryByUrl } from "@/services";
import ReactMain from "@/app/react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pageData = await getEntryByUrl(
    "landing_page",
    "it",
    "/" + slug,
    ["dynamic", "dynamic.info.modal", "sticky", "sticky.info.modal"],
    [""]
    // jsonRtePaths
  );

  console.log("page", pageData);
  // Render data...
  return <ReactMain pageData={pageData}/>
}
