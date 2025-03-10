function createFirework() {
    let container = document.getElementById("fireworks-container");
    for (let i = 0; i < 20; i++) { // 20 chhoti chhoti sparks
        let firework = document.createElement("div");
        firework.classList.add("firework");
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        container.appendChild(firework);

        setTimeout(() => {
            firework.remove(); // 1 sec baad remove karega
        }, 1000);
    }
}

// Fireworks Effect Ko Trigger Karne Ka Function
function startFireworks() {
    let container = document.getElementById("fireworks-container");
    container.style.display = "block";

    let interval = setInterval(createFirework, 300); // Har 300ms me ek firework add hoga

    setTimeout(() => {
        clearInterval(interval);
        container.style.display = "none"; // 4 sec baad band ho jayega
    }, 4000);
}
