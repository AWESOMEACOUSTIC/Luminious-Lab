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

  return <div className="space-y-8 flex flex-col items-center justify-center  p-6">{cards.map((c, i) => <Card key={i} {...c} />)}</div>;
}

export default Data;
