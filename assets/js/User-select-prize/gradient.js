    // Confetti animation
        function startConfetti() {
            const duration = 1000 * 1000; // 15 seconds
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 20, spread: -180, ticks: 50, zIndex: -1000 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 100 * (timeLeft / duration);
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.4), y: Math.random() - 0.2 } }));
            }, 500);
        }

        // Start confetti when the page loads
        window.onload = startConfetti;