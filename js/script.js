// Configuração da data de lançamento
const launchDate = new Date("2024-12-31T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualiza os valores no HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Caso a contagem termine
    if (timeLeft < 0) {
        document.querySelector(".container").innerHTML = "<h1>O lançamento já aconteceu!</h1>";
    }
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
