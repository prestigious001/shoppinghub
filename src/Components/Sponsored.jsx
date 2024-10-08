import React from "react";
import ad1 from "../Assets/ads1.png";
import ad2 from "../Assets/ads2.png";

export default function Sponsored() {
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl text-gray-800">Sponsored</h1>

            <div className="overflow-x-auto whitespace-nowrap m-2">
            <a href="https://wa.link/vpgifv">
            <img src={ad1} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105 hover:shadow-lg" />
            </a>
            <a href="https://wa.link/vpgifv">
            <img src={ad2} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105 hover:shadow-lg" />
            </a>
            <a href="https://wa.link/vpgifv">
            <img src={ad1} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105 hover:shadow-lg" />
            </a>
            <a href="https://wa.link/vpgifv">
            <img src={ad2} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105 hover:shadow-lg" />
            </a>
            <a href="https://wa.link/vpgifv">
            <img src={ad1} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105 hover:shadow-lg" />
            </a>
            <a href="https://wa.link/vpgifv">
            <img src={ad2} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105 hover:shadow-lg" />
            </a>
            <a href="https://wa.link/vpgifv">
            <img src={ad1} alt="" className="inline-block h-40 w-74 rounded-2xl p-2 hover:scale-105" />
            </a>
                
                
            </div>
    </div>
  );
}
