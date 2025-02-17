import GetThumbnail, { SearchParamsTypes } from "@/components/GetThumbnail";
import SkeletonGenre from "@/components/SkeletonGenre";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { query: string };
}) {
  return {
    title: params.query,
    description: "Get Actress Info",
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
