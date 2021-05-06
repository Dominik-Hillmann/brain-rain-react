// Libraries
import React from 'react';
import Collapsible from 'react-collapsible';
// Modules
import CustomFooter from '../CustomFooter';
import Navbar from '../Navbar';
import { Translation } from 'react-i18next';
// Styles
import '../../css/style.css';
// Images
import boldWave from '../../img/bold-wave.png';
import test from './test.png';

export default class WikiMaps extends React.Component {
    constructor(props) {
        super(props);
        this.triggerStyle = {
            fontFamily: '"Celias", sans-serif',
            color: 'white',
            fontSize: '30px',
            cursor: 'pointer',
            borderBottom: '1px solid white'
        };
    }

    render() {
        return (<>
            <Navbar />
            <img src={boldWave} id="bold-wave" alt="A wave to style the website." />
            <div className="wiki-maps-main">
                <div className="side-space"></div>


                <div className="collapsable-root main-product-part">

                    <div className="poster-settings">
                        <Collapsible 
                            trigger={<Translation>{t => t('wiki-background')}</Translation>}
                            triggerStyle={this.triggerStyle}
                        >
                            <p>
                                This is the collapsible content. It can be any element or React
                                component you like.
                            </p>
                            <p>
                                It can even be another Collapsible component. Check out the next
                                section!
                            </p>
                        </Collapsible>
                        <Collapsible 
                            trigger={<Translation>{t => t('wiki-title')}</Translation>}
                            triggerStyle={this.triggerStyle}
                            
                        >
                            <p>
                                This is the collapsible content. It can be any element or React
                                component you like.
                            </p>
                            <p>
                                It can even be another Collapsible component. Check out the next
                                section!
                            </p>
                        </Collapsible>
                    </div>

                    <div className="poster-display">
                        <img src={test} />
                    </div>
                </div>
                <div className="side-space"></div>


                
            </div>
            <CustomFooter
                githubLink="https://github.com/Dominik-Hillmann"
                etsyLink="https://www.etsy.com/de/shop/BRAINRAINShop"
                instagramLink="https://www.instagram.com/charlie_fricke"
            />
        </>)
    }
}

// !https://www.npmjs.com/package/react-collapsible
// !i18next-browser-languagedetector