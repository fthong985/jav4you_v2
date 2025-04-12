import React, { Suspense } from "react";
import ThumbnailContainer, {
  OnErrorThumnailTypes,
  ThumbnailTypes,
} from "./ThumbnailContainer";
import { getThumbnail } from "@/app/services/scrapeDef";
import SkeletonThumnail from "./SkeletonThumnail";

export function hasData(res: ThumbnailTypes | OnErrorThumnailTypes) {
  const hasNoRes =
    "status" in res && (res.status === 404 || res.status === 500);
  const hasError = "status" in res;

  return hasNoRes || hasError;
}

export function Trending() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchTrending />
    </Suspense>
  );
}

export function NewRelease() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchNewRelease />
    </Suspense>
  );
}

export function RecentUpdate() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchRecentUpdate />
    </Suspense>
  );
}

export function Uncensored() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchUncensored />
    </Suspense>
  );
}

export function MatureWoman() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchMatureWoman />
    </Suspense>
  );
}

export function Oral() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchOral />
    </Suspense>
  );
}

export function PrettyGirl() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchPrettyGirl />
    </Suspense>
  );
}

export function Humiliation() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchHumiliation />
    </Suspense>
  );
}

export function Incest() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchIncest />
    </Suspense>
  );
}

export function BeautifulBreast() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchBeautifulBreast />
    </Suspense>
  );
}

export function Creampie() {
  return (
    <Suspense fallback={<SkeletonThumnail />}>
      <FetchCreampie />
    </Suspense>
  );
}

//Fetch Data

async function FetchTrending() {
  const path = "today-hot&sortby=today_views";
  const getTrending: ThumbnailTypes | OnErrorThumnailTypes = await getThumbnail(
    `/today-hot?sort_views`
  );

  if (hasData(getTrending)) return;
  return (
    <ThumbnailContainer
      title="Trending"
      destination={`trending?q=${path}`}
      data={getTrending}
    />
  );
}

async function FetchNewRelease() {
  const path = "release";
  const getNewRelease: ThumbnailTypes | OnErrorThumnailTypes =
    await getThumbnail("/" + path);

  if (hasData(getNewRelease)) return;

  return (
    <ThumbnailContainer
      title="New Release"
      destination={`new_release?q=${path}`}
      data={getNewRelease}
    />
  );
}

async function FetchRecentUpdate() {
  const path = "new&sortby=published_at";
  const getRecentUpdate: ThumbnailTypes | OnErrorThumnailTypes =
    await getThumbnail("/new?sort=published_at");

  console.log(getRecentUpdate);

  if (hasData(getRecentUpdate)) return;

  return (
    <ThumbnailContainer
      title="Recent Update"
      destination={`recent_update?q=${path}`}
      data={getRecentUpdate}
    />
  );
}

async function FetchUncensored() {
  const path = "fc2";
  const getUncensored: ThumbnailTypes | OnErrorThumnailTypes =
    await getThumbnail("/" + path);

  if (hasData(getUncensored)) return;

  return (
    <ThumbnailContainer
      title="Uncensored"
      destination={`uncensored?q=${path}`}
      data={getUncensored}
    />
  );
}

async function FetchMatureWoman() {
  const path = "/mature%20woman?q=genres%2Fmature+woman&sortby=published_at";
  const getMatureWoman: ThumbnailTypes | OnErrorThumnailTypes =
    await getThumbnail(`/genres/Mature%20Woman?sort=published_at`);

  if (hasData(getMatureWoman)) return;
  return (
    <ThumbnailContainer
      title="Mature Woman"
      destination={path}
      data={getMatureWoman}
    />
  );
}

async function FetchOral() {
  const path = "/search/deep%20throat?sortby=published_at";
  const getOral: ThumbnailTypes | OnErrorThumnailTypes = await getThumbnail(
    `/search/deep%20throat`
  );

  if (hasData(getOral)) return;
  return (
    <ThumbnailContainer title="Oral Sex" destination={path} data={getOral} />
  );
}

async function FetchPrettyGirl() {
  const path = "/pretty%20girl?q=genres%2Fpretty+girl&sortby=published_at";
  const getPretty: ThumbnailTypes | OnErrorThumnailTypes = await getThumbnail(
    `/genres/Pretty%20Girl?sort=published_at`
  );

  if (hasData(getPretty)) return;
  return (
    <ThumbnailContainer
      title="Pretty Girl"
      destination={path}
      data={getPretty}
    />
  );
}

async function FetchHumiliation() {
  const path = "/humiliation?q=genres%2Fhumiliation&sortby=published_at";
  const getHumiliation: ThumbnailTypes | OnErrorThumnailTypes =
    await getThumbnail(`/genres/Humiliation?sort=published_at`);

  if (hasData(getHumiliation)) return;
  return (
    <ThumbnailContainer
      title="Humiliation"
      destination={path}
      data={getHumiliation}
    />
  );
}

async function FetchIncest() {
  const path = "/incest?q=genres%2Fincest&sortby=published_at";
  const getIncest: ThumbnailTypes | OnErrorThumnailTypes = await getThumbnail(
    `/genres/Incest?sort=published_at`
  );

  if (hasData(getIncest)) return;
  return (
    <ThumbnailContainer title="Incest" destination={path} data={getIncest} />
  );
}

async function FetchBeautifulBreast() {
  const path =
    "/beautiful%20breasts?q=genres%2Fbeautiful+breasts&sortby=published_at";
  const getBeautifulBreast: ThumbnailTypes | OnErrorThumnailTypes =
    await getThumbnail(`/genres/Beautiful%20Breasts?sort=published_at`);

  if (hasData(getBeautifulBreast)) return;
  return (
    <ThumbnailContainer
      title="Beautiful Breast"
      destination={path}
      data={getBeautifulBreast}
    />
  );
}

async function FetchCreampie() {
  const path = "/creampie?q=genres%2Fcreampie&sortby=published_at";
  const getCreampie: ThumbnailTypes | OnErrorThumnailTypes = await getThumbnail(
    `/genres/Creampie?sort=published_at`
  );

  if (hasData(getCreampie)) return;
  return (
    <ThumbnailContainer
      title="Creampie"
      destination={path}
      data={getCreampie}
    />
  );
}
