// Only execute when everything else is loaded.
const bubbles = () => {
    const maxMobileWidth = 800;
    
    function getRand(min, max, int) {
        // random numbers between min and max, returns an integer if int == true
        let rand = Math.random() * (max - min);
        return (int ? Math.floor(rand) : rand) + min;
    }
    // window width to dertermine where bubbles are supposed to spawn
    let winWidth = 1080;
    const calcWinWidth = () => winWidth = window.innerWidth || document.body.clientWidth;
    calcWinWidth();
    // parent of the bubbles
    // let eyeCatcherNode = document.querySelector('.EyeCatcher')[0];
    const eyeCatcherNode = document.getElementById('eyecatcher');
    console.log(eyeCatcherNode);
    
    function bubbleAnimation() {
        let numBubbles = getRand(1, 4, true);
    
        for (let i = 0; i < numBubbles; i++) {
            let animationDuration = getRand(8, 15, true);
            // create DOM element
            let bubble = document.createElement('img');
            bubble.src = './img/white-circle.png';
            // random styles for the bubble
            bubble.classList.add('bubble');
            bubble.style.right = getRand(
                0, 
                (winWidth < maxMobileWidth ? 1.0 : 0.5) * winWidth, // use all of the width on mobile, otherwise only half of it 
                false
            ) + 'px';
            bubble.style.height = getRand(1, 8, true) + 'px';
            bubble.style.animation = 'bubble-up ' + animationDuration + 's';
            // append and remove if its time is up
            eyeCatcherNode.appendChild(bubble);
            setTimeout(() => bubble.remove(), animationDuration * 1000); // * 1000 because ms
        }
    }
    
    bubbleAnimation();
    setInterval(bubbleAnimation, 3500); // new bubbles every 3.5 seconds
};

