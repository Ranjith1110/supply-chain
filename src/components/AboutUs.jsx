import React from 'react';

const AboutUs = () => {
    return (
        <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-20">
            <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Left: Text */}
                <div className="w-full md:w-1/2">
                    {/* Title */}
                    <div className="mb-8">
                        <h3 className="text-[#000] text-3xl sm:text-4xl font-extrabold uppercase tracking-wide" style={{ fontFamily: 'Fortuner' }}>
                            About Us
                        </h3>
                        <div className="w-20 mt-4 border-t-4 border-[#bf272f]"></div>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        We're more than just a swag platform. Our mission is to empower brands through meaningful merchandise that connects, inspires, and leaves a lasting impression.
                        <br /><br />
                        With thousands of curated products, expert guidance, and a platform built for efficiency, we help companies deliver quality experiences to their teams and clients globally.
                    </p>

                    <button className="bg-[#bf272f] hover:bg-[#a61e24] text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl group">
                        <img
                            src="/about-us.jpg" // 🖼️ Ensure this image exists in your public folder
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
