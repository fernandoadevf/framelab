import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const tiles = [
    {
        id: "01",
        title: "Visão",
        subtitle: "Onde as ideias ganham forma.",
        desc: "Todo projeto começa com clareza e termina com impulso — sempre evoluindo a cada novo horizonte.",
        bg: "bg-[#0A0A0A]",
        text: "text-white",
        border: "border-white/10"
    },
    {
        id: "02",
        title: "Criação",
        subtitle: "No set de filmagem.",
        desc: "Em movimento. Em detalhes. Capturando a essência do momento com precisão cinematográfica.",
        bg: "bg-brand-yellow",
        text: "text-black",
        border: "border-black/5"
    },
    {
        id: "03",
        title: "Aprimoramento",
        subtitle: "Precisão em cor, som e fluxo.",
        desc: "A mágica acontece na pós-produção, onde cada frame é polido para atingir o impacto máximo.",
        bg: "bg-[#0A0A0A]",
        text: "text-white",
        border: "border-white/10"
    },
    {
        id: "04",
        title: "Lançar",
        subtitle: "Revelando histórias para o mundo.",
        desc: "A entrega final. O momento em que a visão se torna realidade e conecta com o público.",
        bg: "bg-brand-yellow",
        text: "text-black",
        border: "border-black/5"
    },
];

const Tile = ({ tile, index, progress, range, targetScale }) => {
    // Translate Y from 100% (below view) to 0% (in view) based on progress
    // The first card (index 0) should start at 0% and stay there (or scale down slightly).
    // Subsequent cards slide up.

    // We want the card to come up and stack.

    const translateY = useTransform(progress, range, ['100vh', '0vh']);

    // For the first card, we don't want it to translate Y, we want it to be static or scale.
    // However, to keep it simple and consistent:
    // User wants "subir os outros cards".
    // Card 1 is already there. Card 2 comes up. Card 3 comes up.

    const y = index === 0 ? 0 : translateY;

    // Scale effect for cards beneath the current one
    const scale = useTransform(progress, range, [1, targetScale]);
    // Note: This logic needs to be slightly different if we want the stacking scale effect.
    // Let's stick to the visual request "subir os cards" first.

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
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative h-[300vh] bg-white z-10" id="approach">
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row overflow-hidden">

                {/* Left Column - Sticky Description */}
                <div className="lg:w-5/12 flex items-center justify-center lg:justify-start lg:pl-20 py-10 lg:py-0 relative z-0">
                    <div className="space-y-12 px-6 lg:px-0">
                        <div className="space-y-6">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Nossa abordagem</h2>
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.9]">
                                Da visão ao<br />lançamento.
                            </h3>
                        </div>

                        <div className="max-w-md hidden lg:block">
                            <p className="text-2xl text-gray-500 font-normal leading-relaxed">
                                Layout intencional, tipografia forte e movimento suave para contar histórias que importam.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Stacking Cards */}
                <div className="lg:w-7/12 relative h-full flex items-start justify-center pt-10">
                    {tiles.map((tile, i) => {
                        const step = 1 / (tiles.length - 1); // 1 / 3 = 0.33
                        // Card 0: 0
                        // Card 1: 0 to 0.33
                        // Card 2: 0.33 to 0.66
                        // Card 3: 0.66 to 1

                        const start = Math.max(0, (i - 1) * step);
                        const end = i * step;

                        // We pass standard range for translation
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
