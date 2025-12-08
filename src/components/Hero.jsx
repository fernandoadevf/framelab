import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="relative w-full h-full">
                    {/* 
                      Responsive Video Cover Logic:
                      - Mobile (Portrait): Height is 100%, Width scales to keep 16:9 (approx 177.77% of height). Centered.
                      - Desktop (Landscape): Width is 100%, Height scales to keep 16:9. Centered.
                    */}
                    <iframe
                        src="https://player.vimeo.com/video/1144626131?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-full md:h-[56.25vw] md:w-full md:min-h-full pointer-events-none object-cover"
                        allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-4 md:mb-6 mix-blend-difference">

                </h1>
                <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-xs sm:max-w-xl font-light tracking-wide mix-blend-difference">
                    Uma agência criativa para quem pensa grande
                </p>
            </div>
        </section>
    );
};

export default Hero;
