const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

// Definindo os nomes dos meses
const monthName = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const clock = setInterval(function time() {
    let today = new Date();
    
    // Atualizando a hora, minuto e segundo
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Formatando os valores para sempre ter dois dígitos
    h = h < 10 ? `0${h}` : h;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    // Atualizando o HTML
    hour.textContent = h;
    minute.textContent = min;
    second.textContent = sec;

    // Atualizando a data (dia, mês e ano)
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();

    // Exibindo a data completa (dia, mês e ano)
    day.textContent = `${d} ${monthName[m]} ${y}`;
}, 1000);