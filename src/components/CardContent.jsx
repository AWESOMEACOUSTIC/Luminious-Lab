import { Cards } from './Cards'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const cardsData = [
    {
        imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6748577ad24e2f2050ddaf30_man.webp',
        title: 'Stay your best self, always',
        description: '',
        tag: { label: 'Wellbeing', gradientFrom: 'yellow-300', gradientTo: 'yellow-500' }
    },
    {
        imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673c1a67dd8dc2f34eb35582_Portrait%20of%20Black%20Woman%203.webp',
        title: 'Optimize your fertility, cycle and menopause naturally',
        description: '',
        tag: { label: 'Women’s health', gradientFrom: 'pink-300', gradientTo: 'pink-500' }
    },
    {
        imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4edb7e08b9f23ffd16d8_Smiling%20Woman%20Purple%20Glasses%201.webp',
        title: `Fuel your cells for a supercharged life'`,
        description: '',
        tag: { label: 'Longevity', gradientFrom: 'red-400', gradientTo: 'red-600' }
    },
]

export default function CardsGrid() {
    return (
        <div className="w-full mx-auto md:mt-32 mt-15 flex flex-col gap-y-2 justify-center items-center">
            <h6 className='md:text-sm text-[0.8em] text-gray-600/80 leading-none font-[switzer-regular]'>Applications</h6>
            <h4 className='md:pb-8 pb-3 font-[switzer-medium] md:text-[1.4vw] text-[1.12em] leading-none'>Start shaping your tomorrow</h4>
            <div className="w-full overflow-x-auto">
                <div className="flex flex-row flex-nowrap gap-x-4 px-4">
                    {cardsData.map((card, idx) => (
                        <div key={idx} className="flex-shrink-0">
                            <Cards {...card} />
                        </div>
                    ))}
                </div>
            </div>
            <button className='w-[34vw] sm:w-[10vw] lg:w-[20vw] h-[4.8vh] md:mt-10 flex gap-x-3 md:w-[16vw]  items-center justify-center text-white font-[switzer-regular] md:py-8 rounded-full bg-black text-center cursor-pointer'>
                <span className='text-[0.78em] md:text-[1.52em]'>
                    All products
                </span>
                <HiOutlineArrowNarrowRight className='w-5 h-5 md:w-6 md:h-6' />
            </button>
        </div>
    )
}
