import React from "react";

export default function typography() {
  return (
    <>
      <div className="container mx-auto">
        <div className="content mx-auto w-11/12">
          <h1 className="py-5 text-center text-3xl font-bold uppercase text-slate-800">
            Color Palette
          </h1>

          <ul className="border-4 border-slate-700">
            <li className="bg-dark-blue-intro py-3 px-3 text-center text-white">
              dark-blue-intro : hsl(217, 28%, 15%)
            </li>
            <li className="bg-dark-blue-main py-3 px-3 text-center text-white">
              dark-blue-main : hsl(218, 28%, 13%)
            </li>
            <li className="bg-dark-blue-footer py-3 px-3 text-center text-white">
              dark-blue-footer : hsl(216, 53%, 9%)
            </li>
            <li className="bg-dark-blue-testimonials py-3 px-3 text-center text-white">
              dark-blue-testimonials : hsl(219, 30%, 18%)
            </li>
            <li className="bg-cyn-gradient py-3 px-3 text-center text-white">
              cyn-gradient : hsl(176, 68%, 64%)
            </li>
            <li className="bg-blue-gradient py-3 px-3 text-center text-white">
              blue-gradient : hsl(198, 60%, 50%)
            </li>
            <li className="bg-light-red py-3 px-3 text-center text-white">
              light-red : hsl(0, 100%, 63%)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
