export function Cards({
    imageSrc,
    title,
    tag: { label, gradientFrom, gradientTo }
}) {
    return (
        <div className="w-[58vw] mb-3 h-[48vh] sm:w-[44vw] sm:h-[40vh] md:w-[18vw] md:h-[29vw] bg-[#fcf8f1] rounded-[1rem]  shadow-sm overflow-hidden flex flex-col gap-y-2 md:rounded-tl-[3vw] md:rounded-tr-[3vw] rounded-tr-[2em] rounded-tl-[2em]">
            {/* Image */}
            <div className="w-full h-[80vw] md:h-50">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover object-center md:rounded-[3vw] rounded-[2rem]"
                />
            </div>


            {/* Text */}
            <div className="hidden sm:px-6 sm:py-5 sm:flex-1 h-[60vw] sm:flex sm:flex-col">
                <h3 className="md:text-[1vw] text-[0.89em] font-semibold mb-2 text-gray-400 font-[switzer-regular] leading-[1.2em] md:leading-[1.2vw]">{title}</h3>
            </div>

            {/* Tag */}
            <div className="hidden sm:block px-6">
                <div className="sm:mb-8 flex justify-start md:w-[15vw] items-center space-x-2 border border-gray-300 rounded-full p-2 md:px-4 md:py-3">
                    <span
                        className={`
              inline-block w-3 h-3 rounded-full
              bg-gradient-to-br from-${gradientFrom} to-${gradientTo}
                `}
                    />
                    <span className="md:text-[1.12vw] text-[0.88em] font-medium font-[switzer-regular]">{label}</span>
                </div>
            </div>
            
            {/* Small Screen Style */}
            <div className="flex flex-col gap-y-3 p-4 sm:hidden">
                <h1 className="text-[1.2em] font-semibold text-gray-800 font-[switzer-medium] leading-tight">
                    {label}
                </h1>
                <p className="text-[0.7em] font-[switzer-regular] text-gray-500">{title}</p>
            </div>

        </div>
    )
}
