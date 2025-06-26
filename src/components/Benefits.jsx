const Overlay = ({ type, label, data }) => {
  return (
    <div className="bg-white/30 bg-opacity-40 backdrop-blur-[1.78vw] rounded-[0.6vw] p-4 w-64 font-[ibm-medium]">
      {type === 'stats' && (
        <>
          <p className="text-[0.7vw] uppercase text-gray-100">{label}</p>
          <div className="mt-2 grid grid-cols-3 text-center gap-2">
            {data.map((d, i) => (
              <div key={i} className="text-start">
                <p className="text-[0.65vw] text-gray-200">{d.label}</p>
                <p className="text-[0.9vw] font-medium text-white">{d.value}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {type === 'bars' && (
        <>
          <div className="flex justify-between items-center text-[0.7vw] text-gray-200 font-[ibm-medium]">
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
  <div className="flex bg-[#f2ece2] rounded-[3vw] overflow-hidden w-[70vw]">
    {/* Left image section with overlays */}
    <div className="relative w-[30vw] h-[30vw]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-[3vw]"
      />

      {overlays.length > 0 && (
        <div className="absolute bottom-8 left-10 flex flex-col space-y-4">
          {overlays.map((ov, idx) => (
            <Overlay key={idx} {...ov} />
          ))}
        </div>
      )}
    </div>

    {/* Right text/content section */}
    <div className="p-8 w-[42vw] space-y-6">
      <h2 className="text-[2.65vw] font-bold text-black font-[saans-medium]">{title}</h2>
      <p className="text-gray-500 mb-22">{description}</p>
      <p className="text-gray-500">{subDescription}</p>

      {features.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className="p-4 px-5 border w-[12vw] border-gray-300 flex gap-x-4  rounded-xl text-start text-gray-700"
            >
              <span className="">{feat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Card;