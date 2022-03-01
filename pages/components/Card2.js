import React from "react";

export default function Card2({ data }) {
  const { title, link, img } = data || {};
  return (
    <a href={link} target="_blank" className="w-[320px] mx-auto my-4">
      <div className="bg-blue-300 max-h-96 rounded-xl h-[190px] hover:shadow-xl overflow-hidden relative">
        <div className="absolute p-4 z-20 h-full w-full justify-between flex flex-col">
          <button className="p-2 backdrop-blur-sm bg-gray-800/30 w-8 h-8 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 1212.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
              className=" fill-white"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M149 12786 c-60 -21 -96 -54 -125 -112 l-27 -55 17 -237 c239 -3324 1089 -5806 2554 -7462 196 -221 524 -537 747 -721 1051 -864 2286 -1345 3725 -1449 329 -24 897 -11 1240 30 85 10 155 17 155 17 1 -1 -3 -96 -8 -212 -68 -1710 -92 -2376 -85 -2415 15 -79 92 -153 174 -166 72 -10 129 11 195 75 127 122 3373 3698 3387 3731 23 54 26 104 10 152 -24 68 -3011 4695 -3064 4745 -111 104 -277 66 -341 -79 -14 -33 -20 -170 -106 -2385 -7 -177 -15 -324 -18 -327 -10 -10 -280 -56 -455 -77 -228 -27 -691 -37 -956 -20 -324 21 -686 78 -994 156 -130 34 -384 108 -429 126 -11 4 -78 29 -150 55 -948 343 -1878 998 -2653 1867 -994 1115 -1793 2558 -2458 4441 -40 115 -85 226 -98 246 -29 45 -114 90 -165 90 -20 -1 -52 -7 -72 -14z" />
              </g>
            </svg>
          </button>
          <div className="p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
            <h1 className="text-white font-bold text-3xl mb-10 uppercase">{title}</h1>
        
          </div>
        </div>
        <img className="w-full" src={img} />
      </div>
    </a>
  );
}
