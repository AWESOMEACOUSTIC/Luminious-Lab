import React, { useState } from 'react';
import { HiArrowDown } from "react-icons/hi2";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";



export default function SectionWithFaq() {

  const rows = [
    { text: 'We believe in meaningful conversations. To help you out,', width: 'w-[24rem]' },
    { text: 'we provide', width: 'w-[12rem]' },
    { text: 'a free 20-minute call', width: 'w-[18rem]' },
    { text: 'to answer your questions.', width: 'w-[20rem]' },
  ];


  const faqs = [
    {
      question: 'When can I see/measure effects?',
      answer:
        'Consistent and correct usage is very important. Generally speaking after 3–4 weeks of use, you should be able to track the difference of the relevant biomarker for you. Contact us for more information.',
    },
    {
      question: 'What is the difference between red light and NIR light?',
      answer:
        'Red light (~660 nm) penetrates the skin surface and supports collagen and circulation. NIR (~850 nm) penetrates deeper to target muscles and joints.',
    },
    {
      question: 'Is red light an alternative to sunlight?',
      answer:
        'While red light therapy can support skin health and cellular function, it does not replace sunlight’s full spectrum benefits like vitamin D synthesis.',
    },
    {
      question: 'Why does it look like that the LEDs are switched off in the NIR setting?',
      answer:
        'NIR LEDs emit light invisible to the human eye but still effective. The device may appear “off” visually even though NIR is active.',
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="w-full 2xl:h-[75vh] flex flex-col md:flex-row justify-between items-center 2xl:items-start 2xl:px-70 py-8 2xl:mt-17">
      {/* Left column */}
      <div className="md:w-1/2 flex flex-col items-center xl:items-start">
        {rows.map((row, i) => (
          <p
            key={i}
            className={
              `${row.width} font-[saans-medium] text-center xl:text-start text-[0.8em] xl:text-[1.65vw] xl:leading-[1.89vw]
               ${i >= rows.length - 2 ? 'text-black' : 'text-gray-400/70'}`
            }
          >
            {row.text}
          </p>
        ))}

        <button
          className="
        bg-black text-white cursor-pointer font-[switzer-medium]
        mt-4 px-4 py-2 rounded-full
        sm:mt-4    sm:px-4  sm:py-2  sm:rounded-md
        md:mt-6    md:px-5  md:py-3  md:rounded-lg
        lg:mt-8    lg:px-6  lg:py-4  lg:rounded-lg
        xl:mt-10   xl:px-6  xl:py-4  xl:rounded-full
        2xl:mt-10  2xl:px-6 2xl:py-4 2xl:rounded-full
        "
        >
          <div
            className="
            flex items-center justify-center
            gap-x-2
            md:gap-x-3
            lg:gap-x-4
            xl:gap-x-4
            2xl:gap-x-4
    "
          >
            <span className='text-[0.76em] sm:text-[0.89em] lg:text-[1em]'>Book a free call</span>
            <HiOutlineArrowNarrowRight className="w-3 h-3 xl:w-6 xl:h-6" />
          </div>
        </button>

      </div>

      {/* Right column: FAQ */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        {faqs.map((faq, i) => {
          const isFaded = hovered !== null && hovered !== i;
          const isExpanded = expanded === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setExpanded(isExpanded ? null : i)}
              className={
                `cursor-pointer w-[84vw] 2xl:w-[34vw] p-2 rounded-xl mb-4 transition-colors duration-200
                 bg-[#F5F0E7] ${isFaded ? 'bg-opacity-10' : 'bg-opacity-70'}`
              }
            >
              <div className="flex justify-between gap-x-12 2xl:gap-x-8 items-start p-4">
                <h4 className="font-medium text-base text-[0.78em] md:text-[1.11vw] font-[switzer-medium]">
                  {faq.question}
                </h4>
                {/* Arrow icon rotates on expand */}
                <span
                  className={
                    `transform transition-transform duration-200 inline-block
                     ${isExpanded ? 'rotate-180' : ''}`
                  }
                >
                  <HiArrowDown className='font-light h-7' />
                </span>
              </div>

              {/* Expandable answer */}
              <div
                className={
                  `overflow-hidden transition-all duration-500
                   ${isExpanded ? 'max-h-[200px] opacity-100 2xl:mt-4' : 'max-h-0 opacity-0 mt-0'}`
                }
              >
                <p className="text-[0.58em] leading-[1.34em] 2xl:text-[0.87vw] 2xl:leading-[1.09vw]  text-gray-500/80 px-4 mt-3 font-[switzer-regular]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
