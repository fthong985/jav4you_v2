import { Skeleton } from "./ui/skeleton";

export default function SkeletonGenre() {
  return (
    <div className="mt-5 px-2 ">
      <Skeleton className="w-52 h-6 bg-neutral-800 mb-2" />
      <Skeleton className="h-[656px] bg-neutral-800" />;
    </div>
  );
}
