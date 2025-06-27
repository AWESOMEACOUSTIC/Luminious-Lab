import { FaInstagram as InstagramIcon } from 'react-icons/fa';

const Card = ({
    content,
    highlighted,
    imageSrc,
    name,
    handle,
    subtitle,
}) => {
    // split first 10 words vs rest
    const words = content.trim().split(/\s+/);
    const firstTen = words.slice(0, 10).join(' ');
    const rest = words.slice(10).join(' ');

    return (
        <div
            className={`
        flex p-2  w-full rounded-xl  overflow-hidden
        transition-opacity gap-x-10 duration-500
        ${highlighted ? 'opacity-100 filter-none' : 'opacity-30 filter'}
      `}
        >
            <div className="w-[34vw] space-y-19 p-2">
                <p className="text-base leading-relaxed h-[12vw]">
                    <span className="text-black text-[0.98vw] font-[switzer-regular]">{firstTen}</span>
                    {rest && (
                        <>
                            {' '}
                            <span className="text-gray-400 text-[0.98vw] font-[switzer-regular]">{rest}</span>
                        </>
                    )}
                </p>

                <div className="mt-6 flex flex-col items-center justify-start">
                    <div className='flex gap-x-2 w-full'> 
                        <span className="font-semibold text-start font-[switzer-medium]">{name}</span>
                        <span className="flex items-center justify-center py-1 px-1 w-[6.92vw] text-center rounded-[0.31vw] text-black border text-[0.68vw]">
                            <InstagramIcon className="w-3 h-3 mr-1 fill-current" />
                            {handle}
                        </span>
                    </div>
                    <div className='flex justify-start w-full'>
                        {subtitle && (
                            <p className="mt-1 text-start text-sm text-gray-500">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            
            {imageSrc && (
                <div className="w-[30vw] h-[23vw]">
                    <img
                        src={imageSrc}
                        alt={`${name} testimonial`}
                        className="object-cover h-full w-full rounded-[2vw]"
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
