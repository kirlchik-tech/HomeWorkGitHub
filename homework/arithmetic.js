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
        // Правильный ответ
        score += level;
        correctAnswers++;
        showResult('Правильно!', 'correct');
        
        // Повышение уровня каждые 5 правильных ответов
        if (correctAnswers % 5 === 0) {
            level++;
            updateStats();
            alert(`Поздравляем! Вы достигли уровня ${level}!`);
        }
    } else {
        // Неправильный ответ
        showResult(`Неправильно! Правильный ответ: ${currentProblem.answer}`, 'incorrect');
    }
    
    problemSolved = true;
    updateStats();
    updateProgress();
    updateButtonsState();
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

// Функция выхода
function exitGame() {
    const finalMessage = ` 🕹️ Игра завершена! 🕹️ \n\nВаш результат:\n• Уровень: ${level}\n• Очки: ${score}\n• Правильных ответов: ${correctAnswers}\n\nХотите выйти в главное меню?`;
    
    if (confirm(finalMessage)) {
        window.location.href = "index.html"; 
    }
    // Если пользователь нажал "Отмена", остаемся в игре
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