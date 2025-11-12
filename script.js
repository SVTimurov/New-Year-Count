// ==========================================================
// 1. ИНИЦИАЛИЗАЦИЯ ДАТЫ И ПЕРЕМЕННЫХ
// ==========================================================

// Устанавливаем дату Нового года (1 января следующего года)
const nextYear = new Date().getFullYear() + 1;
const newYearDate = new Date(nextYear, 0, 1, 0, 0, 0).getTime();

// Переменная для остановки интервала
let countdownInterval;

// ==========================================================
// 2. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ==========================================================

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// ==========================================================
// 3. ОСНОВНАЯ ФУНКЦИЯ ОТСЧЕТА
// ==========================================================

function updateCountdown() {
    const now = Date.now();
    const distance = newYearDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-container').innerHTML =
            '<h2 style="color: #ffd700;">С НОВЫМ ГОДОМ! 🎉</h2>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
}

// ==========================================================
// 4. ЗАПУСК ОТСЧЕТА
// ==========================================================

updateCountdown(); 
countdownInterval = setInterval(updateCountdown, 1000);
