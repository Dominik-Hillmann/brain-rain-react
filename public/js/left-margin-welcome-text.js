/** The minimum number of pixels needed to set activate the text resizing. */
const textResizeThreshold = 1024;

/**
 * Sets the left margin of the welcome text in response to changes in window size.
 */
const setMarginsWelcomeText = () => {
    const logoWrapper = document.querySelector('#logo-wrapper');
    const welcomeTextWrapper = document.querySelector('#welcome-text-wrapper');
    if (window.innerWidth > 1024) {
        welcomeTextWrapper.style.marginLeft = `${logoWrapper.offsetWidth}px`;
    } else {
        // To make CSS able to influence the style again.
        welcomeTextWrapper.style.marginLeft = '0px';
    }

    if (window.innerWidth > textResizeThreshold) {
        welcomeTextWrapper.style.marginRight = `${logoWrapper.offsetWidth}px`;
    } else {
        // To make CSS able to influence the style again.
        welcomeTextWrapper.style.marginRight = null;
    }
}

/**
 * Sets the width of the first part of the welcome text in response to changes
 * in window size.
 */
const set1stPartWelcomeText = () => {
    if (window.innerWidth >= textResizeThreshold) {
        const menuItems = document.querySelector('#menu-items');
        const firstText = document.querySelector('#first-part-welcome');
        firstText.style.width = `${(2 / 5) * menuItems.offsetWidth - 30}px`;
    } else {
        const firstText = document.querySelector('#first-part-welcome');
        firstText.style.width = null;
    }
};

/**
 * Sets the width of the second part of the welcome text in response to changes
 * in window size.
 */
const set2ndPartWelcomeText = () => {
    if (window.innerWidth >= textResizeThreshold) {
        const menuItems = document.querySelector('#menu-items');
        const secondText = document.querySelector('#second-part-welcome');
        secondText.style.width = `${(2 / 5) * menuItems.offsetWidth + 20}px`;
    } else {
        const secondText = document.querySelector('#second-part-welcome');
        secondText.style.width = null;
    }
};

const setMobileWelcomeTextBackground = () => {
    if (window.innerWidth < textResizeThreshold) {
        const textWrapper = document.querySelector('#welcome-text');
        const header = document.querySelector('header');
        const mobileBackground = document.querySelector('#eyecatcher-background-mobile');
        const borderHeight = `${textWrapper.offsetHeight + header.offsetHeight}px`;
        mobileBackground.style.borderTop = `${borderHeight} solid white`;
    }
};

/**
 * Contains all resizes needed to properly display the welcome texts.
 */
const performResizes = () => {
    setMarginsWelcomeText();
    set1stPartWelcomeText();
    set2ndPartWelcomeText();
    setMobileWelcomeTextBackground();
};

window.addEventListener('resize', performResizes);
setTimeout(performResizes, 800);