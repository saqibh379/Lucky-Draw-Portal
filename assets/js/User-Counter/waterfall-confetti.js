function startConfetti() {
    const duration = 1000 * 1000; // 15 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { 
        startVelocity: 150, // Slow Falling Effect
        spread: 180,  // Particles falling down
        ticks: 500, 
        zIndex: -100
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 80 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.9), y: -0.1 } // Start from the top
        }));
    }, 100);
}

// Start confetti when the page loads
window.onload = startConfetti;
