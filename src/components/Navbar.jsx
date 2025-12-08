import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo-dele.png';

import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                <a href="#" className="flex items-center">
                    <img src={logo} alt="FRAMELAB" className="h-8 md:h-10 object-contain" />
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="https://wa.me/595976546687" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide uppercase">
                        {t('nav_contact')}
                    </a>
                </div>

                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
                    <Menu size={24} />
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 z-50"
                    >
                        <button className="absolute top-6 right-6 text-white" onClick={() => setMobileMenuOpen(false)}>
                            <X size={24} />
                        </button>
                        <a href="https://wa.me/595976546687" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-white tracking-widest uppercase" onClick={() => setMobileMenuOpen(false)}>{t('nav_contact')}</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
