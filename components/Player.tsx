"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  MediaPlayer,
  MediaProvider,
  MediaPlayerInstance,
  Poster,
} from "@vidstack/react";

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import { useEffect, useRef, useState } from "react";
import { rotateAdsPlyr } from "@/app/services/services";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Player({
  title,
  videoSrc,
  adsLink,
  proxy,
  poster,
}: {
  title: string;
  videoSrc: string;
  adsLink: string;
  proxy: string;
  poster: string;
}) {
  const [videoAds, setVideoAds] = useState<string>("");
  const plyrRef = useRef<MediaPlayerInstance | null>(null);

  useEffect(() => {
    setVideoAds(adsLink);
  }, [videoSrc, title, adsLink]);

  function seek10sForward() {
    const player = plyrRef.current;
    if (player) {
      player.currentTime = player.currentTime + 10;
    }
  }

  function seek1mForward() {
    const player = plyrRef.current;
    if (player) {
      player.currentTime = player.currentTime + 60;
    }
  }

  function seek10mForward() {
    const player = plyrRef.current;
    if (player) {
      player.currentTime = player.currentTime + 600;
    }
  }

  function seek10sRewind() {
    const player = plyrRef.current;
    if (player) {
      player.currentTime = player.currentTime - 10;
    }
  }

  function seek1mRewind() {
    const player = plyrRef.current;
    if (player) {
      player.currentTime = player.currentTime - 60;
    }
  }

  function seek10mRewind() {
    const player = plyrRef.current;
    if (player) {
      player.currentTime = player.currentTime - 600;
    }
  }

  async function injectAdsPlyr() {
    if (!videoAds) return;
    window.open(videoAds, "_blank");
    setVideoAds("");
    rotateAdsPlyr();
  }

  return (
    <div className="md:min-w-[750px] xl:min-w-[1022px]" onClick={injectAdsPlyr}>
      <MediaPlayer
        ref={plyrRef}
        storage="storage-key"
        src={`${proxy}fetch?url=${videoSrc}`}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        title={title}
      >
        <MediaProvider>
          <Poster
            className="vds-poster object-cover w-full h-full"
            src={`${proxy}fetch?url=${poster}`}
            alt={`${title} poster`}
          />
        </MediaProvider>

        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>

      <div className="px-2 grid grid-cols-2  gap-4 my-2 sm:px-8 lg:px-16 xl:20 lg:my-4">
        <div className="border-main border text-white grid grid-cols-3 rounded-sm">
          <button
            className="p-1 flex items-center justify-center"
            onClick={seek10mRewind}
          >
            <ChevronsLeft size={20} />
            10m
          </button>

          <button
            className="border-x border-main p-1 flex items-center justify-center"
            onClick={seek1mRewind}
          >
            <ChevronLeft size={15} />
            1m
          </button>

          <button
            className="p-1 flex items-center justify-center"
            onClick={seek10sRewind}
          >
            <ChevronLeft size={15} />
            10s
          </button>
        </div>

        <div className="border-main border  text-white grid grid-cols-3 rounded-sm ">
          <button
            className="p-1  flex items-center justify-center"
            onClick={seek10sForward}
          >
            10s
            <ChevronRight size={15} />
          </button>

          <button
            className="border-x border-main p-1 flex items-center justify-center"
            onClick={seek1mForward}
          >
            1m
            <ChevronRight size={15} />
          </button>

          <button
            className="p-1 flex items-center justify-center"
            onClick={seek10mForward}
          >
            10m
            <ChevronsRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
