document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("toggleButton");
    let numberInput = document.getElementById("numberInput");
    let winnerDiv = document.getElementById("winnerDiv");
    let winnerHeading = document.getElementById("winnerHeading");
    let winnerNumber = document.getElementById("winnerNumber");
    let winnerName = document.getElementById("winnerName");
    let prizeImage = document.getElementById("prizeImage");

    let interval;
    let isRunning = false;

    let winSound = new Audio("Count.wav");
    let congratsSound = new Audio("Winner.wav");

    // Initially hide winnerDiv and its children
    winnerDiv.style.opacity = "0";
    winnerDiv.style.visibility = "hidden";

    winnerHeading.style.opacity = "0";
    winnerNumber.style.opacity = "0";
    winnerName.style.opacity = "0";
    prizeImage.style.opacity = "0";
    prizeImage.style.transform = "scale(0.5)";

    toggleButton.addEventListener("click", function () {
        if (!isRunning) {
            isRunning = true;
            toggleButton.textContent = "Stop";
            winSound.loop = true;
            winSound.play();

            interval = setInterval(() => {
                let randomNumber = Math.floor(Math.random() * 1000000000) + 1;
                numberInput.value = randomNumber;
            }, 100);
        } else {
            isRunning = false;
            toggleButton.textContent = "Stop";
            toggleButton.disabled = true;
            clearInterval(interval);
            winSound.pause();
            winSound.currentTime = 0;
            congratsSound.play();

            winnerNumber.textContent = numberInput.value;
            winnerNumber.style.padding = "18px 36px";
            winnerNumber.style.border = "5px solid white";
            winnerNumber.style.animation = "scaleUp 2s ease-in-out infinite alternate";

            winnerName.textContent = "Saqib Hussain";
            winnerName.style.padding = "18px 36px";
            winnerName.style.border = "5px solid white";

            // Show winnerDiv first
            winnerDiv.style.opacity = "1";
            winnerDiv.style.visibility = "visible";
            winnerDiv.style.animation = "fadeIn 5s ease-in-out";

            // After 6 seconds, show child elements
            setTimeout(() => {
                winnerHeading.style.opacity = "1";
                winnerHeading.style.animation = "fadeIn 2s ease-in-out";

                winnerNumber.style.opacity = "1";
                winnerNumber.style.animation = "fadeIn 2s ease-in-out";

                winnerName.style.opacity = "1";
                winnerName.style.animation = "fadeIn 2s ease-in-out";

                setTimeout(() => {
                    prizeImage.style.opacity = "1";
                    prizeImage.style.transform = "scale(2)";
                    prizeImage.style.transition = "opacity 1s ease-in-out, transform 2s ease-in-out";
                }, 1000);
            }, 6000);
            
          

        }
    });
});


// const style = document.createElement("style");
// style.innerHTML = `
// @keyframes slideUp {
//     from {
//         transform: translateY(100%);
//         opacity: 0;
//     }
//     to {
//         transform: translateY(0);
//         opacity: 1;
//     }
// }
// @keyframes fadeIn {
//     from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// }`;
// document.head.appendChild(style);
