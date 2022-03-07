import React from "react";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function LoaderCard() {
  return (
    <div className="pt-16 flex flex-row flex-wrap items-center justify-center">
      {number.map((i) => (
        <div
          key={i}
          className=" pb-44 mx-6 my-4 flex items-center justify-center flex-wrap"
        >
          <div className="w-72 h-48 bg-white p-4 rounded-md ">
            <div className="w-64 h-44 bg-gray-200 animate-pulse"></div>
            <div className="mt-8 h-32 w-full space-y-3">
              <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
