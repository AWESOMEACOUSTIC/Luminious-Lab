import Navbar from "./Navbar";

function Hero() {
  const fadeStyle = {
    animation: "fadeInOut 4s ease-in-out infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>

      <div className="w-full h-screen flex justify-center items-center">
        <div className="relative w-[98%] h-[43.7vw] rounded-[2.89vw] flex flex-col justify-between items-center py-7 bg-center bg-cover bg-[url(https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daa20f8d824dc60d87727_6ca5979b6f014ba47a22c3f88928aabc_bg-1.webp)]">
          <div>
            <Navbar />
          </div>

          <div className="w-full text-center mb-5">
            <p className="text-white/37 text-[1.2vw] font-[switzer-medium]">
              Red Light Therapy: proven, safe, and non-invasive
            </p>
            <h1 className="text-center text-white text-[5.1vw] font-[saans-semibold] tracking-tight leading-none">
              Your cells, supercharged
            </h1>
          </div>

          <div
            style={fadeStyle}
            className="absolute top-28 right-3 w-250 h-110 mix-blend-overlay pointer-events-none"
          >
            <img
              className="w-full h-full object-cover blur-3xl"
              src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673af047ffda0bac4655c97f_db80b98027f9694237c7f771a092fe61_bg-2.avif"
              alt="animation"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
