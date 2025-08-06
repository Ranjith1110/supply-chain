

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[70vh] sm:h-[80vh] flex items-center justify-center"
                style={{
                    backgroundImage: "url('/botles.jpg')", // 🖼️ Image from public folder
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl px-6 text-center text-white">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                        style={{ fontFamily: 'Fortuner' }}
                    >
                        <span>WE HANDLE THE MERCH.</span>{" "}
                        <span className="text-[#bf272f]">YOU MAKE THE IMPACT.</span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusamus, nemo ducimus id perspiciatis 
                    </p>
                    <button className="mt-6 bg-[#bf272f] hover:bg-[#9e1e26] text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300">
                        Shop Products
                    </button>
                </div>
            </div>

            {/* Trusted Companies Section */}
            <div className="w-full bg-white py-10 px-4 text-center">
                <h5 className="text-[#00bfff] font-bold text-base sm:text-lg">
                    Trusted by 1000's of companies:
                </h5>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/company-logos.svg"
                        alt="Trusted Companies"
                        className="max-w-6xl w-full px-4 sm:px-10"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
