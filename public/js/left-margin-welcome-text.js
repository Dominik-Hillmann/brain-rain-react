/**
 * Sets the left margin of the welcome text in response to changes in window size.
 */
const setLeftMarginWelcomeText = () => {
    const logoWrapper = document.querySelector('#logo-wrapper');
    const welcomeTextWrapper = document.querySelector('#welcome-text-wrapper');
    welcomeTextWrapper.style.marginLeft = `${logoWrapper.offsetWidth}px`;
}

const set1stPartWelcomeText = () => {
    const menuItems = document.querySelector('#menu-items');
    const firstText = document.querySelector('#first-part-welcome');
    // console.log(menuItems, firstText);
    firstText.style.width = `${(2 / 5) * menuItems.offsetWidth - 30}px`;
};

const set2ndPartWelcomeText = () => {
    const menuItems = document.querySelector('#menu-items');
    const secondText = document.querySelector('#second-part-welcome');
    // console.log(menuItems, firstText);
    secondText.style.width = `${(2 / 5) * menuItems.offsetWidth + 20}px`;
};

window.addEventListener('resize', () => {
    setLeftMarginWelcomeText();
    set1stPartWelcomeText();
    set2ndPartWelcomeText();
});