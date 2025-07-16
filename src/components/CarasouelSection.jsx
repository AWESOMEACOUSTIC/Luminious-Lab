import CarouselAnimation from './CarasouelAnimation';

const sampleItems = [
  {
    content: `“I’ve been using my Luminous Labs panel for a couple of years now. My husband and I have been using it regularly ever since. It’s our secret weapon to combating pain, helping muscle recovery, overall rejuvenation and relaxation... I’m so grateful to have this panel and can’t imagine life without it - it’s THAT GOOD!”`,
    imageSrc: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d58cc7ed73a6b4db3480_sabine_yesyouare.webp",
    name: 'Lindsay',
    handle: '@lindsays_fitness',
    subtitle: 'Looked for overall rejuvenation and longevity',
  },
  {
    content: `“By alternating between two temperatures, the body experiences fluctuations in blood flow, which results in a “pumping” effect that can help improve overall cardiovascular health. Red-light therapy from Luminous Labs consists of one part within our “chill zone”`,
    imageSrc: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/674583f71241ade97a362ab8_jim_functionised.webp",
    name: 'Nahid',
    handle: '@nsilahian',
    subtitle: 'Wanted more resilience',
  },
  {
    content: `“This has to be one of the most helpful recovery tools I’ve ever used. Today I am using it for my ankle and overall muscle soreness due to a hard weekend of training”`,
    imageSrc: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/674583463a60439f934416f6_isabelle_derberghof.webp",
    name: 'Alex',
    handle: '@alex_moves',
    subtitle: 'Fitness enthusiast',
  },
  {
    content: `"I keep my Luminousred Model 1 by my bed and use** it night and morning. Overtime, I see my skin tone improving. I also use it for post-run recovery.""
`,
    imageSrc: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/674583b4b644c241683d882e_carleigh_bayarebrainspa.webp",
    name: 'Sam',
    handle: '@sam_streches',
    subtitle: 'Owner of BeSuperHuman', 
  }
];

export default function CarasouelAnimation() {
  return (
    <div className="py-10 w-full">
      <h2 className="text-center text-[0.58em] 2xl:text-[0.82vw] text-gray-400 uppercase font-[switzer-regular] 2xl:mb-1">Testimonials</h2>
      <h1 className="text-center text-3xl font-[saans-medium] mb-10 leading-none">
        Helping people feel better, every day
      </h1>
      <CarouselAnimation items={sampleItems} />
    </div>
  );
}
