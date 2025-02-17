import MainPlayer from "@/components/MainPlayer";

export function generateMetadata({ params }: { params: { videoId: string } }) {
  return {
    title: params.videoId,
  };
}

export default async function page({
  params,
}: {
  params: { videoId: string };
}) {
  return <MainPlayer url={params.videoId} />;
}
