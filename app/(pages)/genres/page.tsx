import ListBox from "@/components/ListBox";
import SkeletonGenre from "@/components/SkeletonGenre";
import { Metadata } from "next";
import { Suspense } from "react";

export type GenreListTypes = {
  genre: string;
  totalVideos: string;
};

export const metadata: Metadata = {
  title: "Genre",
  description: "Jav's genre list",
};

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = searchParams?.page;
  const url = page && page !== "1" ? `genres?page=${page}` : "genres";

  return (
    <Suspense fallback={<SkeletonGenre />} key={page}>
      <ListBox title="Genres" url={url} page={page} />;
    </Suspense>
  );
}
