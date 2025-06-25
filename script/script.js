document.addEventListener('DOMContentLoaded', function() {

    // --- FUNÇÃO DO CONTADOR DE TEMPO ---
    const countdownElement = document.getElementById('countdown-hero'); 

    if (countdownElement) {
        let timeInSeconds = 15 * 60; // 15 minutos

        const timer = setInterval(() => {
            if (timeInSeconds <= 0) {
                clearInterval(timer);
                countdownElement.textContent = "OFERTA ENCERRADA";
                return;
            }
            timeInSeconds--;
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = timeInSeconds % 60;

            countdownElement.textContent = 
                `${String(hours).padStart(2, '0')}:` +
                `${String(minutes).padStart(2, '0')}:` +
                `${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

});