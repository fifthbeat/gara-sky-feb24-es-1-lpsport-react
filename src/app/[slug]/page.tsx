import Layout from "@/components/Layout";
import { getEntryByUrl } from "@/services";

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
    ["dynamic", "sticky"],
    [""]
    // jsonRtePaths
  );

  console.log("page", pageData);
  // Render data...
  return <Layout>home</Layout>;
}
