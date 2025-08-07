import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurPromise = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    const promises = [
        {
            icon: '/cup.svg',
            title: 'Only Quality',
            color: 'from-[#bf272f] to-[#ff5b5b]',
            description:
                'We’ve curated the best of what’s out there. We’ve tested thousands of products and 95% didn’t make the cut. We want to make sure every product you order, you’re proud to show off.',
        },
        {
            icon: '/cup.svg',
            title: 'Streamlined Experience',
            color: 'from-[#00bfff] to-[#007aff]',
            description:
                'We’ve automated the entire buying experience. Easily find what you’re looking for, upload your design, mockup your products and checkout in seconds. It’s that simple.',
        },
        {
            icon: '/cup.svg',
            title: 'Customer Obsessed',
            color: 'from-[#bf272f] to-[#ff5b5b]',
            description:
                'Our team is always here to help. If you don’t see what you’re looking for, we’ll source it for you and make your experience stress free and fun.',
        },
    ];

    return (
        <section className="relative w-full py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-80px] left-[-80px] w-80 h-80 opacity-10 rounded-full blur-[100px] z-0"></div>
            <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-[#cd0226] opacity-10 rounded-full blur-[100px] z-0"></div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Title */}
                <div
                    className="text-center mb-16"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    <h3
                        className="text-[#000] text-3xl sm:text-4xl font-extrabold uppercase tracking-wide"
                        style={{ fontFamily: 'Fortuner' }}
                    >
                        Our Promise
                    </h3>
                    <div className="w-20 mx-auto h-1 bg-[#bf272f] mt-4 rounded-full transition-all duration-500 ease-in-out" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {promises.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 text-center border border-white transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={300 + idx * 200}
                            data-aos-offset="0"
                        >
                            <div
                                className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-lg mb-6`}
                            >
                                <img src={item.icon} alt={item.title} className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-[#000] mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromise;
