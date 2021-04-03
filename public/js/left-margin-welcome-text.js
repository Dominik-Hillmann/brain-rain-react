/**
 * Sets the left margin of the welcome text in response to changes in window size.
 */
const setLeftMarginWelcomeText = () => {
    const logoWrapper = document.querySelector('#logo-wrapper');
    const welcomeTextWrapper = document.querySelector('#welcome-text-wrapper');
    welcomeTextWrapper.style.marginLeft = `${logoWrapper.offsetWidth}px`;
}

/**
 * Sets the width of the first part of the welcome text in response to changes
 * in window size.
 */
const set1stPartWelcomeText = () => {
    const menuItems = document.querySelector('#menu-items');
    const firstText = document.querySelector('#first-part-welcome');
    firstText.style.width = `${(2 / 5) * menuItems.offsetWidth - 30}px`;
};

/**
 * Sets the width of the second part of the welcome text in response to changes
 * in window size.
 */
const set2ndPartWelcomeText = () => {
    const menuItems = document.querySelector('#menu-items');
    const secondText = document.querySelector('#second-part-welcome');
    secondText.style.width = `${(2 / 5) * menuItems.offsetWidth + 20}px`;
};

/**
 * Contains all resizes needed to properly display the welcome texts.
 */
const performResizes = () => {
    setLeftMarginWelcomeText();
    set1stPartWelcomeText();
    set2ndPartWelcomeText();
};

window.addEventListener('resize', performResizes);
setTimeout(performResizes, 800);