import ListBox from "@/components/ListBox";
import SkeletonGenre from "@/components/SkeletonGenre";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Maker",
  description: "Japan Adult's Video Provider",
};

export default function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = searchParams?.page;
  const url = page && page !== "1" ? `makers?page=${page}` : "makers";

  return (
    <Suspense fallback={<SkeletonGenre />} key={page}>
      <ListBox title="Makers" url={url} page={page} />;
    </Suspense>
  );
}
