import React from 'react';
import ReactGA from 'react-ga';

import CookieConsent from 'react-cookie-consent';
import { Translation } from 'react-i18next';

/**
 * @class The cookie banner at the bottom of the page.
 */
export default class ConfiguredCookieConsent extends React.Component {
    handleTrackAccept() {
        const trackingId = 'UA-196179486-1';
        ReactGA.initialize(trackingId); 
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <CookieConsent
                onAccept={() => this.handleTrackAccept()}
                location="bottom"
                buttonText={<Translation>{t => t('cookie-understand')}</Translation>}
                contentStyle={{ fontFamily: 'Open Sans' }}
                cookieName="General cookies"
                style={{ 
                    background: "black",
                    fontFamily: 'Celias'
                }}

                buttonStyle={{ 
                    color: "white", 
                    fontFamily: 'Celias',
                    backgroundColor: 'cornflowerblue'
                }}

                enableDeclineButton
                onDecline={() => console.warn('User declined cookie usage.')}
                declineButtonText={<Translation>{t => t('cookie-decline')}</Translation>}
                declineButtonStyle={{
                    background:'var(--brain-rain-pink)',
                    fontFamily: 'Celias'
                }}
            >
                <Translation>{t => t('cookie-banner')}</Translation>&nbsp;🍪
            </CookieConsent>
        );
    }
}