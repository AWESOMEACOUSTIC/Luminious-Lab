import React, { useState, useEffect } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

export default function Banner1() {
    const [ref, isVisible] = useOnScreen("-50px");
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isVisible, hasAnimated]);


    const textBlocks = [
        {
            content: "Meet Kini, the first wearable using",
            classes: `
        w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[60vw] xl:w-[65vw] 2xl:w-[50vw] 
      `
        },
        {
            content:
                " non-invasive light technology",
            classes: `
        text-white/60
        w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[60vw] xl:w-[65vw] 2xl:w-[50vw] 
      `
        },
        {
            content: "to support and improve female longevity",
            classes: `
        text-white/60
        w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[60vw] xl:w-[65vw] 2xl:w-[50vw]`
        }
    ];


    return (
        <div
            ref={ref}
            className={`
        w-full
        h-[120vw]
        sm:h-[80vw]
        md:h-[50vw]
        lg:h-[45vw]
        xl:h-[40vw]
        2xl:h-[45vw]

        flex justify-center items-center
        mt-20

        transform filter transition-all duration-700 ease-out
        ${hasAnimated
                    ? "opacity-100 translate-y-0 blur-0 delay-200"
                    : "opacity-0 translate-y-6 blur-md"}
      `}
        >
            <div
                className={`
          relative
        overflow-hidden
          w-[90vw]
          sm:w-[90vw]
          md:w-[92vw]
          lg:w-[88vw]
          xl:w-[90vw]
          2xl:w-[90%]


          h-[110vw]
          sm:h-[70vw]
          md:h-[48vw]
          lg:h-[41vw]
          xl:h-[36vw]
          2xl:h-[39vw]

          rounded-[2.8vw]

          flex flex-col items-center

          py-5
          sm:py-7
          md:py-9
          lg:py-10
          xl:py-6
          2xl:py-14

          bg-cover bg-center
          bg-[url("https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6841b5ed4392ea9a2feb9b3f_banner.jpg")]
        `}
            >
                {/* Heading */}
                <h1
                    className={`
        text-center font-[saans-semi]
        leading-[4.35vw] sm:leading-[4.5vw] md:leading-[3.21vw] 2xl:leading-[2.5vw]
        mb-8 sm:mb-10 md:mb-16
      `}
                >
                    {textBlocks.map((block, idx) => {
                        if (idx === 0) {
                            const [beforeComma, afterComma] = block.content.split(",");
                            return (
                                <span
                                    key={idx}
                                    className={`${block.classes} block
                text-[3.5vw] sm:text-[3.4vw] md:text-[2.67vw] lg:text-[2.88vw]
                xl:text-[3vw] 2xl:text-[2.21vw] 
              `}
                                >
                                    <span className="text-white">{beforeComma},</span>
                                    <span className="text-white/60">{afterComma}</span>
                                </span>
                            );
                        }

                        return (
                            <span
                                key={idx}
                                className={`${block.classes} block
              text-[3.5vw] sm:text-[3.4vw] md:text-[2.67vw] lg:text-[2.88vw]
              xl:text-[3vw] 2xl:text-[2.21vw] text-white/60 
            `}
                            >
                                {block.content}
                            </span>
                        );
                    })}
                </h1>

                {/* Product Image */}
                <div
                    className={`
            absolute bottom-0 z-20

            w-[190vw]
            sm:w-[137vw]
            md:w-[91vw]
            lg:w-[70vw]
            xl:w-[67vw]
            2xl:w-[72vw]
          `}
                >
                    <img
                        src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daf8686019b7dff3699ab_kini.webp"
                        alt="Kini-product"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Call-to-Action Bar */}
                <div
                    className={`
            absolute bottom-13

            w-[87vw]
            sm:w-[80vw]
            md:w-[59vw]
            lg:w-[56vw]
            xl:w-[59vw]
            2xl:w-[50vw]

            bg-black/30
            backdrop-blur-[1vw]
            z-80

            py-3
            sm:py-3
            md:py-4
            lg:py-3
            xl:py-4
            2xl:py-2

            px-4
            sm:px-6
            md:px-8
            lg:px-8
            xl:px-10
            2xl:px-5

            flex justify-between items-center
            gap-x-6
            rounded-full
          `}
                >
                    <h4
                        className={`
              text-white font-[switzer-medium]

              text-[3.5vw]
              sm:text-[2.54vw]
              md:text-[1.72vw]
              lg:text-[1.45vw]
              xl:text-[1.39vw]
              2xl:text-[1.12vw]
            `}
                    >
                        Get to know Kini now!
                    </h4>

                    <div className="flex items-center gap-x-4">
                        <span
                            className={`
                text-white font-[switzer-medium]

                text-[5vw]
                sm:text-[3.54vw]
                md:text-[2.42vw]
                lg:text-[2.4vw]
                xl:text-[2.56vw]
                2xl:text-[1.74vw]
              `}
                        >
                            €149,00
                        </span>

                        <button
                            className={`
                bg-white text-black font-[switzer-medium] rounded-full

                text-[2vw]
                sm:text-[2vw]
                md:text-[1.38vw]
                lg:text-[1.15vw]
                xl:text-[1.27vw]
                2xl:text-[0.96vw]

                py-2
                sm:py-3
                md:py-2
                lg:py-2
                xl:py-3
                2xl:py-5

                w-[20vw]
                sm:w-[15vw]
                md:w-[8.4vw]
                lg:w-[9vw]
                xl:w-[9vw]
                2xl:w-[8vw]
              `}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
