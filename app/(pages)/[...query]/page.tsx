import { redirect } from "next/navigation";
import QueryContainer from "@/components/QueryContainer";
import {
  OnErrorThumnailTypes,
  ThumbnailTypes,
} from "@/components/ThumbnailContainer";
import { Suspense } from "react";
import SkeletonThumnail from "@/components/SkeletonThumnail";
import { getThumbnail } from "../../services/scrapeDef";
import { SearchParamsTypes } from "@/components/GetThumbnail";
import { searchParamsSet } from "@/lib/filterList";
import { cleanQueryString } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { query: string };
}) {
  const title = params.query[0];

  return {
    title: decodeURIComponent(title.replace(/_/g, " ")),
  };
}

export default async function page({
  params,
  searchParams,
}: {
  searchParams: SearchParamsTypes;
  params: { query: string[] };
}) {
  const query = searchParams.q;
  const title = params.query[0];

  if (!query) redirect("/");

  const urlSet =
    searchParams?.page || searchParams?.filters || searchParams?.sortby
      ? `?page=${searchParams.page}&filters=${searchParams.filters}&sort=${searchParams.sortby}`
      : "";

  const url = cleanQueryString(urlSet);

  return (
    <Suspense fallback={<SkeletonThumnail />} key={url}>
      <GetQueried query={query} title={title} searchParams={searchParams} />;
    </Suspense>
  );
}

async function GetQueried({
  query,
  title,
  searchParams,
}: {
  query: string;
  title: string;
  searchParams: SearchParamsTypes;
}) {
  if (!query) redirect("/");

  const thumbnails: ThumbnailTypes | OnErrorThumnailTypes = await getThumbnail(
    searchParamsSet(searchParams, query)
  );

  return (
    <div className="mt-5 px-2">
      <QueryContainer data={thumbnails} title={title} />;
    </div>
  );
}
