import { getActressInfo } from "@/app/services/scrapeDef";
import GetThumbnail, { SearchParamsTypes } from "@/components/GetThumbnail";
import SkeletonGenre from "@/components/SkeletonGenre";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { query: string };
}) {
  const res = await getActressInfo(`${params.query.toLowerCase()}`);

  const title = params.query;

  const hasNoRes =
    "status" in res && (res.status === 404 || res.status === 500);

  const hasError = "status" in res;

  if (hasNoRes || hasError) return;

  return {
    title: decodeURIComponent(title),
    description: res.info,
    openGraph: {
      image: {
        url: res.image,
      },
    },
  };
}

export default function page({
  params,
  searchParams,
}: {
  searchParams: SearchParamsTypes;
  params: { query: string };
}) {
  return (
    <Suspense
      fallback={<SkeletonGenre />}
      key={searchParams?.filters || searchParams?.sortby || searchParams?.page}
    >
      <GetThumbnail
        query={params.query}
        searchParams={searchParams}
        title="actress"
        endPoint="/actresses"
      />
    </Suspense>
  );
}
