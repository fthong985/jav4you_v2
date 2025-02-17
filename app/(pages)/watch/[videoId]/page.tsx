import { getVideo } from "@/app/services/scrapeDef";
import SkeletonPlayer from "@/components/SkeletonPlayer";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const MainPlayer = dynamic(() => import("@/components/SkeletonPlayer"), {
  ssr: false,
});

export type VideoTypes = {
  poster: string;
  title: string;
  src: string;
  synopsis: string;
  description: DescriptionTypes;
};

export type DescriptionTypes = {
  releaseDate: string;
  code: string;
  title: string;
  actress: string[];
  genre: string[];
  series: string;
  maker: string;
  director: string;
  label: string;
};

type GetVideoTypes = VideoTypes | { status: number; message: string };

export async function generateMetadata({
  params,
}: {
  params: { videoId: string };
}) {
  const video: GetVideoTypes = await getVideo(params.videoId);

  const hasNoRes =
    "status" in video && (video.status === 404 || video.status === 500);

  const hasError = "status" in video;

  if (hasNoRes || hasError) return;

  return {
    title: video.description.code,
    description: video.synopsis,
    openGraph: {
      image: {
        url: video.poster,
      },
    },
  };
}

export default async function page({
  params,
}: {
  params: { videoId: string };
}) {
  return (
    <Suspense fallback={<SkeletonPlayer />} key={params.videoId}>
      <MainPlayer url={params.videoId} />;
    </Suspense>
  );
}
