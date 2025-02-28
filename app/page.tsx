import {
  BeautifulBreast,
  Creampie,
  Humiliation,
  Incest,
  MatureWoman,
  NewRelease,
  Oral,
  PrettyGirl,
  RecentUpdate,
  Trending,
  Uncensored,
} from "@/components/HomeContents";
import SearchArea from "@/components/SearchArea";
import { ChevronsUp } from "lucide-react";
import Link from "next/link";
export default async function page() {
  return (
    <>
      <div className="mt-10 px-2">
        <div className="w-full flex flex-col gap-4" id="init">
          <h1 className="font-semibold tracking-wide text-2xl text-center sm:text-4xl">
            <span className="text-light">Search any</span>{" "}
            <span className="text-main">JAV Videos</span>
          </h1>

          <SearchArea type="body" />
        </div>

        <div className="mt-10 flex flex-col gap-[80px] xl:gap-[100px] 2xl:mt-16">
          <RecentUpdate />
          <NewRelease />
          <PrettyGirl />
          <MatureWoman />
          <Creampie />
          <Oral />
          <Humiliation />
          <Incest />
          <BeautifulBreast />
          <Trending />
          <Uncensored />

          <div className="text-gray-300 underline grid min-[400px]:grid-cols-2 gap-5 sm:gap-10 mx-auto lg:grid-cols-4">
            <Link href={"/genres"}>
              <li>Browse More Genre&apos;s</li>
            </Link>

            <Link href={"/actresses/ranking"}>
              <li>Actress Ranking</li>
            </Link>

            <Link href={"/actresses"}>
              <li>Actress List</li>
            </Link>

            <Link href={"/uncensored_leak?q=uncensored-leak"}>
              <li>Uncensored Leak</li>
            </Link>
          </div>
        </div>
      </div>

      <Link href="#main" className="text-gray-300 mx-auto w-fit mt-10">
        <button className="flex flex-col items-center">
          <ChevronsUp size={20} className="text-main" />
          <span>Back to top</span>
        </button>
      </Link>
    </>
  );
}
