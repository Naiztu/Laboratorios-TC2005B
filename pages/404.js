import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="min-w-screen h-screen bg-neutral flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1 h-[95%] xl:max-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-neutral mb-10">
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
                className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 hover:text-neutral text-blue-600"
              >
                Come back
              </button>
            </Link>
          </div>
        </div>
        <div className="w-11/12 sm:w-1/2 text-center mx-auto">
          <img
            src="https://www.ricos.software/assets/404.svg"
            alt="error 404"
          />
        </div>
      </div>
      <div className="w-64 md:w-96 h-96 md:h-full bg-blue-600 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className="w-96 h-full bg-indigo-600 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div>
  );
}
