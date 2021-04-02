/**
 * @description This file configures react-i18n, the localization library used
 * for this website.
 */

// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// The translations
const resources = {
    en: {
        translation: {
            'navbar': {
                'about': 'About',
                'products': 'Products',
                'contact': 'Contact',
                'etsy': 'Etsy Shop',
            },

            'footer': {
                'imprint': 'Imprint',
                'remark': `BRAINRAIN GbR, Wanzleben, Saxony-Anhalt, Germany. 
                All rights reserved.`
            },
            
            'cookie': {
                'banner': 'We use cookies to enhance user experience, m\'kay?',
                'understand': 'M\'kay. I agree.'
            },

            'catcher': {
                'weare': 'we are',
                'wemake': `We make personalized items for you or your friends 
                and family.`,
                'weoffer': `Currently, we offer custom made wooden 
                key fobs and posters.`,
                'takelook': 'Take a look at them right here'
            }
        }
    },

    de: {
        translation: {
            'navbar': {
                'about': 'Über uns',
                'products': 'Produkte',
                'contact': 'Kontakt',
                'etsy': 'Etsy-Shop',
            },

            'footer': {
                'imprint': 'Impressum',
                'remark': `BRAINRAIN GbR, Wanzleben, Sachsen-Anhalt. Alle Rechte 
                vorbehalten.`,
            }, 
            
            'cookie': {
                'banner': `Wir nutzen Cookies (die Internetdinger, hier gibt 
                es nichts zu essen), um die User Experience zu verbessern.`,
                'understand': 'Verstanden.',
            },

            'catcher': {
                'weare': 'wir sind',
                'wemake': `Wir stellen personalisierte Anhänger für
                dich oder deine Freunde her.`,
                'weoffer': `Derzeit bieten wir maßgefertigte Anhänger 
                aus Holz sowie Poster an.`,
                'takelook': 'Schau sie dir gerne an'
            }
        }
    }
};

// Initialize i18n
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    keySeparator: '-', // E.g. navbar.products
    interpolation: { escapeValue: false }
});

export default i18n;