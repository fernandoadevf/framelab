import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-black pb-20 px-4 relative z-20" id="contact">
            <div className="container mx-auto">
                <div className="bg-brand-yellow rounded-[40px] md:rounded-[60px] p-12 md:p-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-black shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-500">
                    <div className="mb-10 md:mb-0 flex-1">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">{t('cta_title')}</h2>
                        <p className="text-xl md:text-2xl max-w-xl font-medium opacity-90">{t('cta_subtitle')}</p>
                    </div>

                    <div className="flex-shrink-0">
                        <a href="https://wa.me/595976546687" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl inline-block">
                            {t('cta_button')}
                        </a>
                    </div>
                </div>

                <footer className="mt-20 text-center md:flex justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Framelab. {t('footer_rights')}</p>
                    <div className="flex space-x-6 justify-center mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Email</a>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default CTA;
