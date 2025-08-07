import './Hero.css'

const Hero = () => {
  const logos = [
    "/trusted-logo/AlfaDAO Logo.jpg",
    "/trusted-logo/Doge Logo.svg",
    "/trusted-logo/Mew Logo.jpg",
    "/trusted-logo/wyk logo.webp",
    "/trusted-logo/AlfaDAO Logo.jpg",
    "/trusted-logo/Doge Logo.svg",
    "/trusted-logo/Mew Logo.jpg",
    "/trusted-logo/wyk logo.webp",
    "/trusted-logo/AlfaDAO Logo.jpg",
    "/trusted-logo/Doge Logo.svg",
    "/trusted-logo/Mew Logo.jpg",
    "/trusted-logo/wyk logo.webp",
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] sm:h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/heross.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70"></div>

        <div className="relative z-10 max-w-7xl px-6 text-center text-white animate-fade-in-up mt-10">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: 'Fortuner', letterSpacing: "3px", }}
          >
            <span className="block">WE HANDLE THE MERCH.</span>
            <span className="text-[#bf272f] block mt-2">YOU MAKE THE IMPACT.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium text-white">
            Your all-in-one swag platform. Shop, store, and ship high-quality swag across the globe – effortlessly.
          </p>
          <button className="mt-8 bg-[#bf272f] hover:bg-[#9e1e26] text-white font-bold py-3 px-10 rounded-full shadow-lg transition duration-300">
            🚀 Shop Products
          </button>
        </div>
      </div>

      {/* Trusted By Marquee Section */}
      <div className="w-full bg-white py-12 px-4 sm:px-10 overflow-hidden">
        <h5 className="text-[#00bfff] font-bold text-lg sm:text-xl mb-8 text-center">
          Trusted by 1,000+ Companies Worldwide
        </h5>

        <div className="relative w-full">
          <div className="marquee">
            <div className="marquee-content">
              {logos.concat(logos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Trusted Logo ${index + 1}`}
                  className="h-10 sm:h-12 md:h-14 mx-6 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
