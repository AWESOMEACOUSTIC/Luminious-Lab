import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useOnScreen } from "../hooks/useOnScreen"
import { useState, useEffect } from 'react'

function Banner2() {
    const [ref, isVisible] = useOnScreen('-50px')
        const [hasAnimated, setHasAnimated] = useState(false)
    
        useEffect(() => {
            if (isVisible && !hasAnimated) {
                setHasAnimated(true)
            }
        }, [isVisible, hasAnimated])

    return (
        <div
            ref={ref}
            className={` w-full h-[40vw] flex justify-center items-center mt-2
            transform filter transition-all duration-700 ease-out
            ${
                hasAnimated ? 'opacity-100 translate-y-0 blur-0 delay-200' : 'opacity-0 translate-y-6 blur-md'
            }
      ` }
        >
            <div className='w-[84vw] h-[39vw] px-14 py-32 rounded-[2.8vw] bg-center bg-cover bg-[url("https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/672b31fc7faaf85e22e10b4f_pink-dots-ds.webp")] flex flex-col gap-y-30'>
                <h2 className="text-[2.65vw] w-[43vw] tracking-tight leading-none font-[saans-medium]">
                    Learn how CellLight powers your health. Innovative, <span className="text-red-800/90">science-backed technology created to fuel cellular energy and longevity.</span>
                </h2>
                <button className='bg-[#fcf8f1] w-[10vw] px-5 py-4 rounded-full flex gap-x-4 items-center justify-center'>
                    <span className="font-[switzer-regular]">Explore</span>
                    <HiOutlineArrowNarrowRight className='w-6 h-6' />
                </button>
            </div>
        </div>

    )
}

export default Banner2