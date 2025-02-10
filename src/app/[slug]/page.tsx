import Layout from "@/components/Layout";
import { getEntryByUrl } from "@/services";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = await searchParams;

  //   const post = await queryPostBySlug({ slug })
  const ooo = await getEntryByUrl(
    "landing_page",
    "it",
    "/" + slug,
    ["pippo"],
    ["pippo"]
    // refUids,
    // jsonRtePaths
  );
  //   const slug = (await params).slug;
  //   const slug = (await params).slug;
  console.log("DATa----", r);
  console.log("page", ooo);
  // Render data...
  return <Layout>home</Layout>;
}
