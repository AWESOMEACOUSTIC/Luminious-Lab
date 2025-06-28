import { useOnScreen } from "../hooks/useOnScreen"
import { useState, useEffect } from 'react'

function Banner1() {
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
            className={` w-full h-[40vw] flex justify-center items-center mt-20
            transform filter transition-all duration-700 ease-out
            ${
                hasAnimated ? 'opacity-100 translate-y-0 blur-0 delay-200' : 'opacity-0 translate-y-6 blur-md'
            }
      ` }
        >
            <div className='relative w-[84vw] h-[39vw] rounded-[2.8vw] flex flex-col py-10 items-center bg-cover bg-center bg-[url("https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6841b5ed4392ea9a2feb9b3f_banner.jpg")]'>
                <h1 className='text-center font-[switzer-semi] leading-[2.6vw] mb-60 text-[2vw] w-[37vw]'>
                    <span className='text-white'>Meet Kini, </span>
                    <span className='text-white/60'>the first wearable using non-invasive light technology to support and improve female longevity</span>
                </h1>
                <div className='absolute bottom-0 w-290 z-[20]'>
                    <img
                        className='w-full h-full object-cover'
                        src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daf8686019b7dff3699ab_kini.webp"
                        alt="Kini-product" />
                </div>
                <div className='w-[51vw] bg-black/30 backdrop-blur-[1vw] z-[80] py-3 px-6 flex justify-between gap-x-50 items-center rounded-full mt-14'>
                    <h4 className='text-white font-[switzer-medium] text-[1.12vw]'>Get to know Kini now!</h4>
                    <div className='flex gap-x-6 items-center justify-center'>
                        <span className='text-white font-[switzer-medium] text-[1.82vw]'>€149,00</span>
                        <button className='text-black rounded-full p-5 font-[switzer-medium] text-[0.88vw] bg-white w-[8.4vw]'>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1