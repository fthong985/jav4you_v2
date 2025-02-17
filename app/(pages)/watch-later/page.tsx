import dynamic from "next/dynamic";
import OnEditButton from "./OnEditButton";
import { SaveLaterProvider } from "@/context/SaveLaterProvider";
import { Metadata } from "next";
const SaveVideos = dynamic(() => import("@/components/SaveVideos"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Saved Videos",
};

export default function page() {
  return (
    <SaveLaterProvider>
      <div className="flex flex-col mt-5 px-2 gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-main mb-2">Save Videos</h1>
          <OnEditButton />
        </div>

        <SaveVideos />
      </div>
    </SaveLaterProvider>
  );
}
