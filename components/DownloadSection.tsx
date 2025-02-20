"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useEffect, useState } from "react";
import { getAdsLinkDownload } from "@/app/services/services";

export default function DownloadSection({
  code,
  src,
}: {
  code: string;
  src: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [adsDlLink, setAdsDlLink] = useState<string>("");

  const url: string = `https://www.savethevideo.com/home?url=${src}`;

  useEffect(() => {
    async function getAdsLinkBut() {
      const res = await getAdsLinkDownload();
      setAdsDlLink(res);
    }

    getAdsLinkBut();
  }, []);

  function handleCancel() {
    setIsModalOpen(false);
  }

  async function handleDownloadBut() {
    if (adsDlLink) {
      window.open(adsDlLink, "_blank");
      setAdsDlLink("");
    }

    setIsModalOpen(true);
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <button
          className="w-full bg-[#E9E9E9] text-black rounded-xl py-1 mt-1 hover:bg-[#a7a7a7] transition duration-200"
          onClick={handleDownloadBut}
        >
          Download
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-sm min-h-[230px] w-full min-[300px]:w-[95vw] min-[400px]:w-[90vw] min-[500px]:w-[85vw] sm:max-w-[420px] ">
        <DialogHeader className="self-start border-b border-[#4e4d4d] w-full py-2">
          <DialogTitle className="text-left font-medium">Download</DialogTitle>
          <DialogDescription className="w-fit text-sm opacity-80">
            Code: {code}
          </DialogDescription>
        </DialogHeader>

        <div className="">
          We are about to redirect you to a third-party website where you can
          download the video faster. Simply press the &apos;Start&apos; button
          on that page to begin the download.
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            className="border border-gray-400 rounded-xl py-1 sm:py-[6px]"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            className="w-full bg-neutral-700 text-white rounded-xl py-1 sm:py-[6px] hover:bg-neutral-600 transition duration-200 "
            onClick={() => {
              window.open(url, "_blank");
            }}
          >
            Proceed
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
