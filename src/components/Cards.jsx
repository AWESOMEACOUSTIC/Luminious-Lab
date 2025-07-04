export function Cards({
    imageSrc,
    title,
    tag: { label, gradientFrom, gradientTo }
}) {
    return (
        <div className="w-[50vw] h-[30vh] md:w-[18vw] md:h-[25vw] bg-[#fcf8f1] rounded-2xl shadow-sm overflow-hidden flex flex-col rounded-tl-[2vw] rounded-tr-[2vw]">
            {/* Image */}
            <div className="w-full h-full md:h-50">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded-[2vw]"
                />
            </div>


            {/* Text */}
            <div className="px-6 py-5 flex-1 flex flex-col">
                <h3 className="md:text-[1vw] text-[0.7em] font-semibold mb-2 text-gray-400 font-[switzer-regular] leading-[1rem] md:leading-[1.2vw]">{title}</h3>
            </div>

            {/* Tag */}
            <div className="px-6">
                <div className="mb-8 flex justify-start w-[15vw] items-center space-x-2 border border-gray-300 rounded-full px-4 py-3">
                    <span
                        className={`
              inline-block w-3 h-3 rounded-full
              bg-gradient-to-br from-${gradientFrom} to-${gradientTo}
                `}
                    />
                    <span className="text-[1.12vw] font-medium font-[switzer-regular]">{label}</span>
                </div>
            </div>


        </div>
    )
}
