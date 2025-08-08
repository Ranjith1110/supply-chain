import React from "react";
import "./TrustedCompany.css";

const TrustedCompany = () => {
    const logos = [
        "/trusted-logo/AlfaDAO Logo.jpg",
        "/trusted-logo/Doge Logo.svg",
        "/trusted-logo/Mew Logo.jpg",
        "/trusted-logo/wyk logo.webp",
        "/trusted-logo/wyk logo.webp",
        "/trusted-logo/Mew Logo.jpg",
        "/trusted-logo/wyk logo.webp",
        "/trusted-logo/wyk logo.webp",
    ];

    return (
        <div className="w-full bg-white py-12 px-4 sm:px-10 overflow-hidden">
            <h5 className="text-[#bf272f] tracking-wide font-bold text-lg sm:text-xl mb-8 text-center uppercase">
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
                                className="h-16 sm:h-20 mx-6 object-contain grayscale rounded-4xl hover:grayscale-0 transition duration-300 ease-in-out"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;
