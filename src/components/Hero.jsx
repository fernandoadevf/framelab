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
                    {/* 
                      Responsive Video Cover Logic:
                      - We need the video to Cover the screen. 
                      - Since it's 16:9, we enforce:
                        1. Min width 100% and Min height 100% (to cover)
                        2. If screen is wide (landscape), height = 56.25vw is too small if aspect < 16:9. No, wait.
                        
                        Robust logic:
                        - Width = 100vw, Height = 56.25vw. If Height < 100vh, then scaling up is needed.
                        - Instead of complex calc, we use the "oversize" technique:
                        - w-[177.77vh] ensures width is enough to cover height.
                        - min-w-full ensures width covers width.
                        - h-[56.25vw] ensures height is enough to cover width.
                        - min-h-full ensures height covers height.
                    */}
                    <iframe
                        src="https://player.vimeo.com/video/1144626131?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full min-h-[56.25vw] h-full pointer-events-none object-cover"
                        allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
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
