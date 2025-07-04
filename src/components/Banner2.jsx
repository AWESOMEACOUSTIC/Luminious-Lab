import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useOnScreen } from "../hooks/useOnScreen";

export default function Banner2() {
  const [ref, isVisible] = useOnScreen("-50px");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`
        w-full
        h-[90vw] sm:h-[80vw] md:h-[70vw] lg:h-[60vw] xl:h-[60vw] 2xl:h-[39vw]
        flex justify-center items-center md:mt-2
        transform filter transition-all duration-700 ease-out
        ${hasAnimated
          ? "opacity-100 translate-y-0 blur-0 delay-200"
          : "opacity-0 translate-y-6 blur-md"}
      `}
    >
      <div
        className={`
          w-[90vw] sm:w-[90vw] md:w-[92vw] lg:w-[91vw] xl:w-[93vw] 2xl:w-[84vw]
          h-[88vw] sm:h-[74vw] md:h-[68vw] lg:h-[56vw] xl:h-[57vw] 2xl:h-[39vw]
          px-4 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-14
          py-8 sm:py-16 md:py-24 lg:py-28 xl:py-32 2xl:py-32
          rounded-[2.8vw]
          bg-center bg-cover
          bg-[url("https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/672b31fc7faaf85e22e10b4f_pink-dots-ds.webp")]
          flex flex-col
          gap-y-8 sm:gap-y-16 md:gap-y-14 lg:gap-y-17 xl:gap-y-15 2xl:gap-y-30
        `}
      >
        <h2
          className={`
            text-[5vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.8vw]
            xl:text-[2.97vw] 2xl:text-[2.65vw]
            w-[60vw] sm:w-[57vw] md:w-[48vw] lg:w-[39vw]
            xl:w-[42vw] 2xl:w-[43vw]
            tracking-tight leading-none
            font-[saans-medium]
          `}
        >
          Learn how{" "}
          <span className="text-red-800/90">
            CellLight powers your health. Innovative, science-backed technology
            created to fuel cellular energy and longevity.
          </span>
        </h2>

        <button
          className={`
            bg-[#fcf8f1]
            w-[30vw] sm:w-[25vw] md:w-[18vw] lg:w-[17vw]
            xl:w-[17vw] 2xl:w-[10vw]
            px-4 sm:px-5 md:px-6 lg:px-8 xl:px-8 2xl:px-5
            py-2 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-4
            rounded-full cursor-pointer
            shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
            flex items-center justify-center gap-x-3 sm:gap-x-4
          `}
        >
          <span className="font-[switzer-regular] text-[3.5vw] sm:text-[2vw] md:text-[1.87vw] lg:text-[1.78vw] xl:text-[1.53vw] 2xl:text-[0.88vw]">
            Explore
          </span>
          <HiOutlineArrowNarrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
