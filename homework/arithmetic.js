// Переменные игры
let score = 0;
let level = 1;
let correctAnswers = 0;

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
    
    return {
        problem: `${num1} ${operation} ${num2}`,
        answer: answer
    };
}

// Основной игровой цикл
function startGame() {
    while (true) {
        const { problem, answer } = generateProblem();
        
        // Используем prompt() для запроса ответа
        const userAnswer = prompt(`Решите пример: ${problem}\n\nТекущие очки: ${score}\nУровень: ${level}\nПравильных ответов: ${correctAnswers}`);
        
        // Если пользователь нажал "Отмена" - выходим на главную страницу
        if (userAnswer === null) {
            const finalMessage = `Игра завершена!\n\nИтоговый результат:\n• Уровень: ${level}\n• Очки: ${score}\n• Правильных ответов: ${correctAnswers}`;
            alert(finalMessage);
            window.location.href = "index.html"; // Возврат на главную страницу
            break;
        }
        
        const userAnswerNum = parseFloat(userAnswer);
        
        if (isNaN(userAnswerNum)) {
            alert('Пожалуйста, введите число!');
            continue;
        }
        
        if (userAnswerNum === answer) {
            // Правильный ответ
            score += level;
            correctAnswers++;
            alert('✅ Правильно!');
            
            // Повышение уровня каждые 5 правильных ответов
            if (correctAnswers % 5 === 0) {
                level++;
                alert(`🎉 Поздравляем! Вы достигли уровня ${level}!`);
            }
        } else {
            // Неправильный ответ
            alert(`❌ Неправильно! Правильный ответ: ${answer}`);
        }
    }
}

// Запуск игры при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    startGame();
});