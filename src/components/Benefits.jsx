const Overlay = ({ type, label, data }) => {
  return (
    <div className="2xl: bg-gray-500/30 bg-opacity-40 2xl:backdrop-blur-[1.78vw] backdrop-blur-[1.98vw] rounded-[2vw] 2xl:rounded-[0.6vw] py-2 px-4 2xl:p-4 w-54 2xl:w-74 font-[ibm-medium]">
      {type === 'stats' && (
        <>
          <p className="2xl:text-[0.7vw] text-[0.58em] uppercase text-gray-100">{label}</p>
          <div className="mt-2 grid grid-cols-3 text-center gap-2">
            {data.map((d, i) => (
              <div key={i} className="text-start">
                <p className="2xl:text-[0.65vw] text-[0.68em] text-gray-200">{d.label}</p>
                <p className="2xl:text-[0.9vw] text-[0.82em] font-medium text-white">{d.value}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {type === 'bars' && (
        <>
          <div className="flex justify-between items-center text-[0.6em] 2xl:text-[0.7vw] text-white 2xl:text-gray-300 font-[ibm-medium]">
            <span>{label}</span>
            <span>{data.status}</span>
          </div>
          <div className="w-full h-1 bg-white bg-opacity-30 rounded-full mt-2">
            <div
              className="h-1 rounded-full bg-white"
              style={{ width: `${data.percentage}` }}
            />
          </div>
        </>
      )}
    </div>
  );
};

const Card = ({
  imageSrc,
  overlays = [],
  title,
  description,
  subDescription,
  features = [],
}) => (
  <div className="2xl:flex 2xl:flex-row flex flex-col bg-[#f2ece2] rounded-[3vw] overflow-hidden 2xl:w-[70vw] w-[94vw]">
    {/* Left image section with overlays */}
    <div className="relative 2xl:w-[30vw] 2xl:h-[35vw] w-full h-[67vw]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover object-top rounded-[3vw]"
      />

      {overlays.length > 0 && (
        <div className="absolute 2xl:bottom-8 bottom-4 2xl:left-10 left-4 flex flex-col space-y-4">
          {overlays.map((ov, idx) => (
            <Overlay key={idx} {...ov} />
          ))}
        </div>
      )}
    </div>

    {/* Right text/content section */}
    <div className="p-8 space-y-3 2xl:space-y-6 flex flex-col justify-center items-center text-center">
      <h2 className="text-[2.65vw] font-bold text-black font-[saans-medium]">{title}</h2>
      <p className="text-gray-500 mb-7 2xl:mb-22 font-[switzer-medium] text-lg 2xl:text-sm">{description}</p>
      <p className="text-gray-500 text-[0.7em] 2xl:text-sm font-[switzer-regular]">{subDescription}</p>

      {features.length > 0 && (
        <div className="w-full h-[22vh] 2xl:w-hidden 2xl:h-hidden grid grid-rows-2 xl:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className="p-4 px-5 border 2xl:w-[12vw] border-gray-300 flex gap-x-4 rounded-xl text-start text-gray-700"
            >
              <span className="text-[0.7em] 2xl:text-[lg]">{feat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Card;