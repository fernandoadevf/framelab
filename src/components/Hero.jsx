import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="relative w-full h-full">
                    {/* Local video background */}
                    <video
                        src="/videos/teste.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        preload="auto"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    />
                </div>
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-4 md:mb-6 mix-blend-difference">
                    {t('hero_title')}
                </h1>
                <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-xs sm:max-w-xl font-light tracking-wide mix-blend-difference">
                    {t('hero_subtitle')}
                </p>
            </div>
        </section>
    );
};

export default Hero;
