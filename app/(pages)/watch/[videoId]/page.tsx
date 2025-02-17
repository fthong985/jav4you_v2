import MainPlayer from "@/components/MainPlayer";

export function generateMetadata({ params }: { params: { videoId: string } }) {
  return {
    title: params.videoId,
    description: "Watch Jav",
  };
}

export default async function page({
  params,
}: {
  params: { videoId: string };
}) {
  return <MainPlayer url={params.videoId} />;
}
