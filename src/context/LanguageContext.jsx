import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt'); // Default to PT
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const detectLanguage = async () => {
            try {
                // Fetch user's country from IP API
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                // If country is Brazil (BR), set to PT.
                // Otherwise (assuming detected LATAM traffic or rest of world), set to ES.
                if (data.country_code === 'BR') {
                    setLanguage('pt');
                } else {
                    setLanguage('es');
                }
            } catch (error) {
                console.warn('IP detection failed, falling back to browser language', error);

                // Fallback: Check browser settings
                const browserLang = navigator.language.toLowerCase();
                if (browserLang.includes('pt')) {
                    setLanguage('pt');
                } else {
                    setLanguage('es');
                }
            } finally {
                setLoading(false);
            }
        };

        detectLanguage();
    }, []);

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, t, loading }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
