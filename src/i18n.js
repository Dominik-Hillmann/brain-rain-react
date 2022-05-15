/**
 * @description This file configures react-i18n, the localization library used
 * for this website.
 */

// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'navbar': {
        'about': 'About',
        'products': 'Projects',
        'contact': 'Contact',
        'etsy': 'Etsy Shop',
        'scrappbook': 'Scrappbook Shop'
      },

      'footer': {
        'imprint': 'Imprint',
        'remark': `BRAINRAIN GbR, Wanzleben, Saxony-Anhalt, Germany. 
        All rights reserved.`,
        'agbs': 'Terms & Conditions',
        'returnpolicy': 'Return Policy'
      },
            
      'cookie': {
        'banner': `We use cookies to personalize content and ads, to
        provide functionality for social media and to analyze access
        to our website. Also, we pass on data about the usage of our website
        to our partners for social media, advertising and analyzes.
        Our partners possibly merge these data with further data that you
        have provided or that they collected while you used their products
        and services.`,
        'understand': 'I agree.',
        'decline': 'I decline.'
      },

      'catcher': {
        'weare': 'Hi, we are',
        'wemake': `We welcome you to our small creative playground.`,
        'weoffer': `Here, you can find an overview of our ongoing projects.`,
        'contact': `In case you're interested, please contact us!`
      },

      'filmphoto': {
        'title': `Event photography and videography`,
        'text': `It doesn't matter whether it's grandma's birthday party, the next village 
        fete or your wedding, we make sure that the most beautiful moments are captured in 
        proper style and that you can focus on the moment. In addition to professional 
        equipment, we primarily rely on our creativity!`,
        'button': `Our portfolio (coming soon)`
      },

      'product1': {
        'title': 'Wooden dog tag with individual engraving.',
        'text': `A beautiful round dog tag carrying an engraving 
        that you choose. It has a diameter of 3.5 cm and is treated with
        lineseed oil to make it resistant against weather and to make it
        feel nicer. Also you can choose between a leather band or a metal 
        fastening.`,
        'button': 'Let me take a look!'
      },

      'product2': {
        'title': `Personalized wooden key fobs.`,
        'text': `A nice soft key fob made from walnut wood that 
        perfectly fits your keys. It is 6 cm long and also made 
        resistant to weather with lineseed oil. You can choose
        to engrave all four sides with symbols and text with a
        font of your choosing.`,
        'button': `Show me more!`
      },

      'product3': {
        'title': `Wooden Spotify key fob.`,
        'text': `A wonderful present for your loved ones. Now, you
        can gift your favorite song using a Spotify code. Just provide 
        us with the song and an optional text and font and we will
        engrave it for you onto beech wood. The key fob is 6 cm long and
        has 1.5 cm of width and height.`,
        'button': `Just what I needed!`
      },

      'products': {
        'hovertext': '👉 Visit Etsy.'
      },

      'wiki': {
        'background': 'Background image',
        'title': 'Title'
      }
    }
  },

  de: {
    translation: {
      'navbar': {
        'about': 'Über uns',
        'products': 'Projekte',
        'contact': 'Kontakt',
        'etsy': 'Etsy-Shop',
        'scrappbook': 'Scrappbook-Shop'
      },

      'footer': {
        'imprint': 'Impressum',
        'remark': `BRAINRAIN GbR, Wanzleben, Sachsen-Anhalt. Alle Rechte 
        vorbehalten.`,
        'agbs': 'AGBs',
        'returnpolicy': 'Widerrufsbelehrung'
      }, 
            
      'cookie': {
        'banner': `Wir verwenden Cookies, um Inhalte und Anzeigen zu 
        personalisieren, Funktionen für soziale Medien anbieten zu können 
        und die Zugriffe auf unsere Website zu analysieren. Außerdem 
        geben wir Informationen zu Ihrer Verwendung unserer Website an 
        unsere Partner für soziale Medien, Werbung und Analysen weiter. 
        Unsere Partner führen diese Informationen möglicherweise mit weiteren 
        Daten zusammen, die Du ihnen bereitgestellt hast oder die sie im 
        Rahmen Deiner Nutzung der Dienste gesammelt haben.`,
        'understand': 'Ich stimme zu.',
        'decline': 'Ich lehne ab.'
      },

      'catcher': {
        'weare': 'Hi, wir sind',
        'wemake': `Wir smöchten dich herzlich auf unserer Kreativspielwiese begrüßen.`,
        'weoffer': `Hier findest Du einen Überblick unserer aktuellen Projekte.`,
        'contact': `Nimm bei Interesse gerne Kontakt mit uns auf!`
      },

      'filmphoto': {
        'title': `Eventfotographie und -filmographie`,
        'text': `Egal ob Omas Geburtstagsfeier, das nächste Dorffest oder eure Hochzeit, 
        wir sorgen dafür, dass die schönsten Momente stilecht festgehalten werden und Du 
        dich ganz auf den Augenblick konzentrieren kannst. Dabei setzen wir neben 
        professionellem Equipment vor allem auf unsere Kreativität!`,
        'button': `Unser Portfolio (bald verfügbar)`
      },

      'product1': {
        'title': 'Hundemarke aus Holz mit Gravierung.',
        'text': `Eine schöne runde Hundemarke, die eine Gravierung
        Ihrer Wahl trägt. Sie hat einen Durchmesser von 3,5 cm und wird 
        mit Leinölfirnis behandelt, damit sie wetterbeständig ist und sich
        weicher anfühlt. Du kannst ebenfalls zwischen einem Lederband 
        und einer Metallbefestigung wählen.`,
        'button': 'Hier geht es zum Angebot.'
      },

      'product2': {
        'title': `Personalisierter Schlüsselanhänger aus Holz.`,
        'text': `Ein schöner, weicher Schlüsselanhänger aus Nussbaumholz,
        welcher ein perfektes Geschenk zum Geburtstag oder zu Weihnachten ist. 
        Er ist 6 cm lang und ist durch die Behandlung mit Leinsamenöl
        resistent gegen Wetter und außerdem wesentlicher besser
        anzufassen. Du kannst jede Seite mit Symbolen und Text mit
        einer Schrift deiner Wahl verzieren.`,
        'button': `Auf zum Shop!`
      },

      'product3': {
        'title': `Spotify-Anhänger aus Holz.`,
        'text': `Ein tolles Geschenk zu Weihnachten oder zum Geburtstag.
        So kannst du dein Lieblingslied als Spotify-Code verschenken.
        Gib uns einfach das Lied, das du verschenken willst und einen
        optionalen Text, und wir schicken Dir einen Birkenholz-Anhänger
        zu. Der Anhänger ist 6 cm lang und 1,5 cm hoch und breit. Auch
        dieser Anhänger wird mit Leinölfirnis bearbeitet.`,
        'button': `Zum Shop.`
      },

      'products': {
        'hovertext': '👉 Zu Etsy.'
      },

      'wiki': {
        'background': 'Hintergrundbild',
        'title': 'Titel'
      }
    }
  }
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: '-',
  interpolation: { escapeValue: false }
});

export default i18n;
