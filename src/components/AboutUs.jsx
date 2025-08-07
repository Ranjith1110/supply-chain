import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-10 lg:px-20 text-white"
            style={{
                backgroundImage: "url('/abouts.png')",
            }}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Left: Text */}
                <div className="w-full md:w-1/2">
                    {/* Title */}
                    <div className="mb-8">
                        <h3
                            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide"
                            style={{ fontFamily: 'Fortuner', color: '#000000' }}
                        >
                            About Us
                        </h3>
                        <div className="w-20 mt-4 border-t-4 border-[#bf272f]"></div>
                    </div>

                    <p className="text-black text-base sm:text-lg leading-relaxed mb-6">
                        At <strong className="text-[#bf272f]">Swagify</strong>, we believe that great merchandise isn't just about products — it's about connection.
                        Our platform was built to help companies express their brand identity through premium, custom-curated swag that delights recipients and leaves a lasting impression.
                        <br /><br />
                        Whether you're welcoming new hires, launching a campaign, or appreciating loyal clients — we ensure the experience is seamless, elevated, and uniquely you.
                        <br /><br />
                        From automated fulfillment to global delivery, we make it easy to showcase your brand with style and purpose.
                    </p>

                    <button className="bg-[#bf272f] hover:bg-[#a61e24] text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl group">
                        <img
                            src="/about-us.jpg"
                            alt="About Us"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
