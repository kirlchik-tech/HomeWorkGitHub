// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Основная функция игры
function startQuiz() {
    let correctCount = 0; // Счетчик правильных ответов
    
    // Проходим по всем вопросам
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        // Формируем текст вопроса с вариантами ответов
        const questionText = `${currentQuestion.question}\n\n${currentQuestion.options.join('\n')}`;
        
        // Запрашиваем ответ у пользователя
        const userAnswer = prompt(questionText);
        
        // Если пользователь нажал "Отмена" - выходим из игры
        if (userAnswer === null) {
            alert('Викторина прервана!');
            window.location.href = "index.html";
            return;
        }
        
        // Преобразуем ответ в число
        const userAnswerNum = parseInt(userAnswer);
        
        // Проверяем правильность ответа
        if (userAnswerNum === currentQuestion.correctAnswer) {
            correctCount++;
            alert('✅ Правильно!');
        } else {
            alert(`❌ Неправильно! Правильный ответ: ${currentQuestion.correctAnswer}`);
        }
    }
    
    // Выводим итоговый результат
    const resultMessage = `Викторина завершена!\n\nПравильных ответов: ${correctCount} из ${quiz.length}`;
    alert(resultMessage);
    
    // Предлагаем сыграть еще раз
    const playAgain = confirm('Хотите сыграть еще раз?');
    
    if (playAgain) {
        startQuiz(); // Перезапускаем викторину
    } else {
        window.location.href = "index.html"; 
    }
}

// Запуск викторины при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    startQuiz();
});