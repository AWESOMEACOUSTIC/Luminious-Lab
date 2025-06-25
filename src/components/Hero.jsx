import Navbar from "./Navbar"

function Hero() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[98%] h-[43.7vw] rounded-[2.89vw] flex flex-col justify-between items-center py-7 bg-center bg-cover bg-[url(https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daa20f8d824dc60d87727_6ca5979b6f014ba47a22c3f88928aabc_bg-1.webp)]'>
                <div>
                    <Navbar/>
                </div>
                <div className='w-full text-center mb-5'>
                    <p className="text-white/37 text-[1.2vw] font-[switzer-medium]">Red Light Therapy: proven, safe, and non-invasive</p>
                    <h1 className='text-center text-white text-[5.1vw] font-[saans-semibold] tracking-tight leading-none'>
                        Your cells, supercharged
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default Hero