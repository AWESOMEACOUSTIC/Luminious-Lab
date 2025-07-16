import Card from "./Benefits";

function Data() {
  const cards = [
    {
      imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033244546d6ee0abb7478_Frame%202087331480-2.webp',
      overlays: [
        {
          type: 'stats',
          label: 'Uterine Blood Flow: Optimal',
          data: [
            { label: 'PI', value: '0.65' },
            { label: 'RI', value: '0.55' },
            { label: 'S/D', value: '2.3' },
          ],
        },
      ],
      title: 'Optimized female health',
      description:
        'Red light therapy can effectively support your fertility in the long-term.',
      subDescription:
        'By increasing blood flow, supporting tissue regeneration and balancing hormones, CellLight™ supports your uterus and ovaries naturally.',
      features: [
        'Promotes healthy tissue',
        'Balances your hormones',
      ],
    },
    {
      imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/67403324759d4ba06050c510_Frame%202087331480-1.webp',
      overlays: [
        {
          type: 'bars',
          label: 'Deep Sleep Score',
          data: { percentage: '80%', status: 'Optimal' },
        },
        {
          type: 'bars',
          label: 'Sleep Efficiency',
          data: { percentage: '75%', status: 'Optimal' },
        },
      ],
      title: 'Enhanced deep sleep',
      description:
        'Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep.',
      subDescription:
        'CellLight™ will not disturb your natural sleep–wake cycle and melatonin production.',
      features: [
        'Longer deep sleep',
        'Enhanced neuronal function',
        'Balances sleep hormone secretion',
      ],
    },
    {
      imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/67409518627cee8a92540085_face.webp',
      overlays: [
        {
          type: 'bars',
          label: 'Deep Sleep Score',
          data: { percentage: '80%', status: 'Optimal' },
        },
        {
          type: 'bars',
          label: 'Sleep Efficiency',
          data: { percentage: '75%', status: 'Optimal' },
        },
      ],
      title: 'Enhanced deep sleep',
      description:
        'Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep.',
      subDescription:
        'CellLight™ will not disturb your natural sleep–wake cycle and melatonin production.',
      features: [
        'Longer deep sleep',
        'Enhanced neuronal function',
        'Balances sleep hormone secretion',
      ],
    },
    {
      imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033242fdd7bd921085f15_Frame%202087331480.webp',
      overlays: [
        {
          type: 'bars',
          label: 'Deep Sleep Score',
          data: { percentage: '80%', status: 'Optimal' },
        },
        {
          type: 'bars',
          label: 'Sleep Efficiency',
          data: { percentage: '75%', status: 'Optimal' },
        },
      ],
      title: 'Enhanced deep sleep',
      description:
        'Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep.',
      subDescription:
        'CellLight™ will not disturb your natural sleep–wake cycle and melatonin production.',
      features: [
        'Longer deep sleep',
        'Enhanced neuronal function',
        'Balances sleep hormone secretion',
      ],
    },
    {
      imageSrc: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6740332425a33e3de6ea9d44_Frame%202087331482.webp',
      overlays: [
        {
          type: 'bars',
          label: 'Deep Sleep Score',
          data: { percentage: '80%', status: 'Optimal' },
        },
        {
          type: 'bars',
          label: 'Sleep Efficiency',
          data: { percentage: '75%', status: 'Optimal' },
        },
      ],
      title: 'Enhanced deep sleep',
      description:
        'Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep.',
      subDescription:
        'CellLight™ will not disturb your natural sleep–wake cycle and melatonin production.',
      features: [
        'Longer deep sleep',
        'Enhanced neuronal function',
        'Balances sleep hormone secretion',
      ],
    },

  ];

return (
  <div
    className="
      flex flex-col items-center justify-center
      gap-y-4 sm:gap-y-4 md:gap-y-5 lg:gap-y-6 xl:gap-y-6 2xl:gap-y-2
      mt-5 sm:mt-20 md:mt-20 lg:mt-24 xl:mt-24 2xl:mt-23
      p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-6
    "
  >
    {/* Tag line */}
    <span
      className="
        text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-sm
        text-gray-400/80 leading-none font-[switzer-regular]
      "
    >
      Benefits
    </span>

    {/* Heading */}
    <h1
      className="
        pb-6 sm:pb-6 md:pb-7 lg:pb-8 xl:pb-8 2xl:pb-8
        font-[switzer-medium]
        text-3xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[1.6vw]
        leading-none
      "
    >
      Feel the difference in every aspect
    </h1>

    {/* Cards */}
    <div
      className="
        flex flex-col items-center justify-center 
        space-y-6 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-8 2xl:space-y-8
      "
    >
      {cards.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </div>
  </div>
);



}

export default Data;
