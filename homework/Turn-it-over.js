let attempts = 0;

function startGame() {
    attempts++;
    
    const userText = prompt(`Введите текст для переворота (попытка ${attempts}):`);
    
    // Если пользователь нажал "Отмена" - выходим на сайт
    if (userText === null) {
        alert(`Игра завершена! Всего попыток: ${attempts - 1}`);
        window.location.href = "index.html";
        return;
    }
    
    if (userText === '') {
        alert('Вы не ввели текст!');
        startGame();
        return;
    }
    
    const reversedText = userText.split('').reverse().join('');
    
    alert(`📝 Исходный: "${userText}"\n🔄 Перевернутый: "${reversedText}"`);
    
    if (confirm('🎮 Хотите попробовать еще раз?')) {
        startGame();
    } else {
        alert(`🎉 Спасибо за игру! Всего перевернуто текстов: ${attempts}`);
        window.location.href = "index.html";
    }
}

document.addEventListener('DOMContentLoaded', startGame);