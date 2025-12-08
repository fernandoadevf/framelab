import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';


const Tile = ({ tile, index, progress, range, targetScale }) => {
    const translateY = useTransform(progress, range, ['100vh', '0vh']);
    const y = index === 0 ? 0 : translateY;

    return (
        <motion.div
            style={{ y }}
            className={`absolute top-0 md:top-[15vh] w-[90%] md:w-[650px] aspect-[16/10] ${tile.bg} ${tile.text} rounded-[1.5rem] p-8 md:p-10 border-2 ${tile.border} shadow-2xl flex flex-col origin-top`}
        >
            <div className="flex justify-between items-start mb-auto">
                <span className="text-5xl font-light opacity-50 font-mono tracking-tighter">{tile.id}</span>
            </div>

            <div className="mt-auto">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter leading-none">{tile.title}</h3>
                <p className={`text-xl md:text-2xl opacity-90 mb-6 font-medium leading-tight`}>{tile.subtitle}</p>
                <p className="text-lg opacity-60 max-w-sm leading-relaxed">{tile.desc}</p>
            </div>
        </motion.div>
    );
};

const Approach = () => {
    const { t } = useLanguage();
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const tiles = [
        {
            id: "01",
            title: t('search_ideas_title'),
            subtitle: t('search_ideas_subtitle'),
            desc: t('search_ideas_desc'),
            bg: "bg-[#0A0A0A]",
            text: "text-white",
            border: "border-white/10"
        },
        {
            id: "02",
            title: t('creation_title'),
            subtitle: t('creation_subtitle'),
            desc: t('creation_desc'),
            bg: "bg-brand-yellow",
            text: "text-black",
            border: "border-black/5"
        },
        {
            id: "03",
            title: t('refinement_title'),
            subtitle: t('refinement_subtitle'),
            desc: t('refinement_desc'),
            bg: "bg-[#0A0A0A]",
            text: "text-white",
            border: "border-white/10"
        },
        {
            id: "04",
            title: t('launch_title'),
            subtitle: t('launch_subtitle'),
            desc: t('launch_desc'),
            bg: "bg-brand-yellow",
            text: "text-black",
            border: "border-black/5"
        },
    ];

    return (
        <section ref={container} className="relative h-[300vh] bg-white z-10" id="approach">
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row overflow-hidden">

                {/* Left Column - Sticky Description */}
                <div className="lg:w-5/12 flex items-center justify-center lg:justify-start lg:pl-20 py-10 lg:py-0 relative z-0">
                    <div className="space-y-12 px-6 lg:px-0">
                        <div className="space-y-6">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">{t('approach_eyebrow')}</h2>
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.9]" dangerouslySetInnerHTML={{ __html: t('approach_title') }} />
                        </div>

                        <div className="max-w-md hidden lg:block">
                            <p className="text-2xl text-gray-500 font-normal leading-relaxed">
                                {t('approach_desc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Stacking Cards */}
                <div className="lg:w-7/12 relative h-full flex items-start justify-center pt-10">
                    {tiles.map((tile, i) => {
                        const step = 1 / (tiles.length - 1);
                        const start = Math.max(0, (i - 1) * step);
                        const end = i * step;

                        return (
                            <Tile
                                key={i}
                                tile={tile}
                                index={i}
                                progress={scrollYProgress}
                                range={[start, end]}
                                targetScale={1}
                            />
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Approach;
