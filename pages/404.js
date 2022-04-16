import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="min-w-screen relative flex h-screen items-center overflow-hidden bg-neutral p-5 lg:p-20">
      <div className="relative h-[95%] min-w-full flex-1 items-center rounded-3xl bg-white p-10 text-center text-gray-800 shadow-xl md:flex md:text-left lg:p-20 xl:max-h-full">
        <div className="w-full md:w-1/2">
          <div className="mb-10 font-light text-gray-600 md:mb-20">
            <h1 className="mb-10 text-3xl font-black uppercase text-neutral lg:text-5xl">
              Error 404
              <br />
              Page no found
            </h1>
            <p>Sorry, but you are looking for</p>
            <p>something that isn&apos;t here.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <Link href="/">
              <button
                onClick={() => router.back()}
                className="transform text-lg font-light text-blue-600 outline-none transition-all hover:scale-110 hover:text-neutral focus:outline-none"
              >
                Come back
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-11/12 text-center sm:w-1/2">
          <img
            src="https://www.ricos.software/assets/404.svg"
            alt="error 404"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -top-64 right-20 h-96 w-64 -rotate-45 transform rounded-full bg-blue-600 bg-opacity-30 md:-top-96 md:right-32 md:h-full md:w-96"></div>
      <div className="pointer-events-none absolute -bottom-96 right-64 h-full w-96 -rotate-45 transform rounded-full bg-indigo-600 bg-opacity-20"></div>
    </div>
  );
}
