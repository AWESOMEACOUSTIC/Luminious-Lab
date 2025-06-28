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
        <div className="w-full mx-auto mt-32 flex flex-col gap-y-2 justify-center items-center">
            <h6 className='text-sm text-gray-400/80 leading-none font-[switzer-regular]'>Applications</h6>
            <h4 className='pb-8 font-[switzer-medium] text-[1.4vw] leading-none'>Start shaping your tomorrow</h4>
            <div className=' p-4 flex justify-center gap-x-4 items-center md:grid-cols-3'>
                
                {cardsData.map((card, idx) => (
                    <Cards key={idx} {...card} />
                ))}
            </div>
            <button className='mt-10 flex gap-x-3 w-[11vw] items-center justify-center text-white font-[switzer-regular] py-4 rounded-full bg-black text-center cursor-pointer'>
                <span>
                    All products
                </span>
                <HiOutlineArrowNarrowRight className='w-6 h-6'/>
            </button>
        </div>
    )
}
