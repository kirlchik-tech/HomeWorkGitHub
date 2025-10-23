// Элементы DOM
const problemElement = document.getElementById('problem');
const answerInput = document.getElementById('answer-input');
const checkButton = document.getElementById('check-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const exitButton = document.getElementById('exit-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const progressElement = document.getElementById('progress');

// Переменные игры
let score = 0;
let level = 1;
let currentProblem = {};
let correctAnswers = 0;
let totalProblems = 0;
let problemSolved = false;

// Инициализация игры
function initGame() {
    score = 0;
    level = 1;
    correctAnswers = 0;
    totalProblems = 0;
    problemSolved = false;
    updateStats();
    generateProblem();
    answerInput.value = '';
    resultElement.style.display = 'none';
    updateProgress();
    updateButtonsState();
}

// Генерация случайной задачи
function generateProblem() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    const maxNum = 5 + level * 5;
    
    switch(operation) {
        case '+':
            num1 = Math.floor(Math.random() * maxNum) + 1;
            num2 = Math.floor(Math.random() * maxNum) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * maxNum) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * (maxNum/2)) + 1;
            num2 = Math.floor(Math.random() * (maxNum/2)) + 1;
            answer = num1 * num2;
            break;
        case '/':
            answer = Math.floor(Math.random() * (maxNum/2)) + 1;
            num2 = Math.floor(Math.random() * (maxNum/2)) + 1;
            num1 = answer * num2;
            break;
    }
    
    currentProblem = {
        num1,
        num2,
        operation,
        answer
    };
    
    problemElement.textContent = `${num1} ${operation} ${num2}`;
    totalProblems++;
    problemSolved = false;
    updateButtonsState();
}

// Проверка ответа
function checkAnswer() {
    if (problemSolved) {
        return;
    }
    
    const userAnswer = parseFloat(answerInput.value);
    
    if (isNaN(userAnswer)) {
        alert('Пожалуйста, введите число!');
        return;
    }
    
    if (userAnswer === currentProblem.answer) {
        score += level;
        correctAnswers++;
        showResult('Правильно!', 'correct');
        
        // Создаем конфетти за правильный ответ
        createConfetti();
        
        // Повышение уровня каждые 5 правильных ответов
        if (correctAnswers % 5 === 0) {
            level++;
            updateStats();
            
            // Создаем БОЛЬШЕ конфетти при переходе на новый уровень!
            createLevelUpConfetti();
            
            setTimeout(() => {
                alert(`🎉 Поздравляем! Вы достигли уровня ${level}! 🎉`);
            }, 500); // Небольшая задержка чтобы конфетти успели появиться
        }
    } else {
        showResult(`Неправильно! Правильный ответ: ${currentProblem.answer}`, 'incorrect');
    }
    
    problemSolved = true;
    updateStats();
    updateProgress();
    updateButtonsState();
}

// Создание конфетти для перехода на новый уровень (БОЛЬШЕ конфетти!)
function createLevelUpConfetti() {
    const colors = ['#ff6b6b', '#ffa726', '#66bb6a', '#42a5f5', '#ab47bc', '#ffd54f', '#4CAF50', '#2196F3', '#FF9800', '#9C27B0'];
    
    // Создаем много конфетти для праздника!
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createSingleConfetti(colors, true);
        }, i * 30); // Растягиваем по времени для эффекта "фейерверка"
    }
}

// Создание одного конфетти (обновленная функция)
function createConfetti(isLevelUp = false) {
    const colors = ['#ff6b6b', '#ffa726', '#66bb6a', '#42a5f5', '#ab47bc', '#ffd54f'];
    
    // Для обычного правильного ответа - меньше конфетти
    const count = isLevelUp ? 20 : 10;
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            createSingleConfetti(colors, isLevelUp);
        }, i * 50);
    }
}

// Создание одного конфетти
function createSingleConfetti(colors, isLevelUp = false) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Для перехода на уровень - больше вариантов форм и размеров
    const size = isLevelUp ? 
        Math.random() * 15 + 8 : 
        Math.random() * 10 + 5;
    
    const shapes = ['circle', 'rect', 'diamond'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Позиция - для уровня конфетти по всей ширине
    const left = isLevelUp ? 
        Math.random() * 100 + 'vw' : 
        (Math.random() * 50 + 25) + 'vw';
    
    confetti.style.left = left;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    // Разная форма конфетти
    if (shape === 'circle') {
        confetti.style.borderRadius = '50%';
    } else if (shape === 'diamond') {
        confetti.style.transform = 'rotate(45deg)';
    }
    
    // Для уровня - дольше и с большей амплитудой
    const duration = isLevelUp ? 
        (Math.random() * 3 + 3) + 's' : 
        (Math.random() * 2 + 2) + 's';
    
    const fallDistance = isLevelUp ? '120vh' : '100vh';
    
    confetti.style.animation = `confetti-fall ${duration} ease-in forwards`;
    confetti.style.setProperty('--fall-distance', fallDistance);
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.remove();
        }
    }, 5000);
}
// Показать результат
function showResult(message, className) {
    resultElement.textContent = message;
    resultElement.className = `result ${className}`;
    resultElement.style.display = 'block';
}

// Обновление статистики
function updateStats() {
    scoreElement.textContent = score;
    levelElement.textContent = level;
}

// Обновление прогресса
function updateProgress() {
    const progressPercentage = (correctAnswers % 5) * 20;
    progressElement.style.width = `${progressPercentage}%`;
}

// Обновление состояния кнопок
function updateButtonsState() {
    if (problemSolved) {
        checkButton.disabled = true;
        checkButton.style.opacity = '0.6';
        checkButton.style.cursor = 'not-allowed';
        
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
        nextButton.style.cursor = 'pointer';
    } else {
        checkButton.disabled = false;
        checkButton.style.opacity = '1';
        checkButton.style.cursor = 'pointer';
        
        nextButton.disabled = true;
        nextButton.style.opacity = '0.6';
        nextButton.style.cursor = 'not-allowed';
    }
}

// Следующая задача
function nextProblem() {
    generateProblem();
    answerInput.value = '';
    resultElement.style.display = 'none';
    answerInput.focus();
}

// Функция выхода с анимацией
function exitGame() {
    // Анимация фона
    document.body.classList.add('exiting');
    
    // Анимация контейнера
    const container = document.querySelector('.container');
    container.classList.add('fade-out');
    
    // Создаем конфетти
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    // Показываем прощальное сообщение
    setTimeout(() => {
        const finalMessage = `🎮 Игра завершена! 🎮\n\nВаш результат:\n• Уровень: ${level}\n• Очки: ${score}\n• Правильных ответов: ${correctAnswers}\n\nХотите выйти в главное меню?`;
        
        if (confirm(finalMessage)) {
            window.location.href = "index.html"; 
        } else {

            // Убираем анимации выхода
            document.body.classList.remove('exiting');
            container.classList.remove('fade-out');
            
            // Восстанавливаем нормальный фон
            document.body.style.background = 'linear-gradient(135deg, #6e8efb, #a777e3)';
        }
    }, 1000);
}

// Создание конфетти
function createConfetti() {
    const colors = ['#ff6b6b', '#ffa726', '#66bb6a', '#42a5f5', '#ab47bc', '#ffd54f'];
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Обработчики событий
checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextProblem);
restartButton.addEventListener('click', initGame);
exitButton.addEventListener('click', exitGame); 

answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !problemSolved) {
        checkAnswer();
    }
});

// Запуск игры при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});