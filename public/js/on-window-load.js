/* eslint-disable no-undef */
window.onload = () => {

  try {
    performResizes();

  } catch (e) {

    if (e instanceof TypeError) {
      console.log('performResizes() did not apply because of missing landing page items.')
    }
  }
};