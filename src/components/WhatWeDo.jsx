import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import VimeoPlayer from './VimeoPlayer';

const WhatWeDo = () => {
    const { t } = useLanguage();

    // Define services inside component to access translations
    const services = [
        { id: 1, title: t('service_viral'), videoId: '1144626131' },
        { id: 2, title: t('service_real_estate'), videoId: '1144619382' },
        { id: 3, title: t('service_construction'), videoId: '1144620712' },
        { id: 4, title: t('service_marketing'), videoId: '1140890699' },
    ];

    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="bg-[#F0F0F0] text-black lg:min-h-screen relative z-20 flex flex-col">

            {/* Introduction Header (Mobile Only) */}
            <div className="container mx-auto px-6 pt-16 pb-8 lg:hidden">
                <div className="max-w-xl">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{t('what_we_do_eyebrow')}</h2>
                    <h3 className="text-3xl sm:text-4xl font-normal mb-6 leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: t('what_we_do_title') }} />
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        {t('what_we_do_desc')}
                    </p>
                </div>
            </div>

            {/* --- DESKTOP VIEW (Click & Swap) --- */}
            <div className="hidden lg:flex flex-row flex-1 h-screen">
                {/* Left Content List */}
                <div className="w-1/2 flex flex-col justify-center p-24 bg-[#F0F0F0]">
                    <div className="max-w-xl w-full mb-12">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">{t('what_we_do_eyebrow')}</h2>
                        <h3 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: t('what_we_do_title') }} />
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                            {t('what_we_do_desc')}
                        </p>
                    </div>

                    <div className="max-w-xl w-full space-y-6">
                        {services.map((item) => (
                            <div
                                key={item.id}
                                className="cursor-pointer group"
                                onClick={() => setActiveService(item)}
                            >
                                <div className={`flex items-center space-x-6 transition-all duration-300 ${activeService.id === item.id ? 'translate-x-4 text-black' : 'text-gray-400 hover:text-gray-600'}`}>
                                    <span className="text-sm font-mono opacity-60">0{item.id}</span>
                                    <h4 className={`text-2xl md:text-3xl ${activeService.id === item.id ? 'font-medium' : 'font-light'}`}>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Video Display */}
                <div className="w-1/2 h-full relative bg-black overflow-hidden" style={{ height: '100vh', minHeight: '100vh' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.videoId}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full"
                            style={{ width: '100%', height: '100%', minHeight: '100%' }}
                        >
                            <VimeoPlayer
                                videoId={activeService.videoId}
                                variant="fill"
                            />
                            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* --- MOBILE VIEW (Swipe Carousel) --- */}
            <div 
                className="lg:hidden w-full overflow-x-auto snap-x snap-mandatory flex space-x-4 px-6 pb-8 no-scrollbar"
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollBehavior: 'smooth',
                    touchAction: 'pan-x',
                }}
            >
                {services.map((item) => (
                    <div key={item.id} className="snap-center shrink-0 w-[85vw] flex flex-col space-y-4">
                        {/* Video Card */}
                        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden relative shadow-lg">
                            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                            {/* Mobile carousel video */}
                            <VimeoPlayer
                                videoId={item.videoId}
                                variant="aspect"
                                className="rounded-2xl"
                            />
                        </div>
                        {/* Title */}
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-mono text-gray-400">0{item.id}</span>
                            <h4 className="text-xl font-medium text-black">{item.title}</h4>
                        </div>
                    </div>
                ))}
                {/* Spacer for end of list */}
                <div className="snap-center shrink-0 w-2" />
            </div>

        </section>
    )
}

export default WhatWeDo;
