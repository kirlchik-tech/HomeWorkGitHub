function guesStoneGame() {
    // Генерируем случайный выбор для ии и делаем возможность выбора для игрока:
    // let randomNumber = (Math.random() * (2 - 0)) + 0;
    const choices = ['камень', 'ножницы', 'бумага'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    let attempts = 0;
    let userChoic;
    
    console.log("Игра 'Камень ножницы бумага' началась! Я выбрал, теперь ты!");
    
    while (true) {
        userChoic = prompt("Выбери: камень, ножницы, бумага.");
        
        // Проверяем, нажал ли пользователь "Отмена"
        if (userChoic === null) {
            alert("Игра прервана. Возвращаемся на главную страницу...");
            window.location.href = "index.html"; 
            return; 
        }

        
        attempts++;
        
        // Проверка валидности ввода
        if ( !choices.includes(userChoic.toLowerCase()) ) {
            alert("Не понял вас, выберите камень, ножницы или бумагу.");
            attempts--; // Не считаем неверные попытки
            continue;
        }
        
        if ( userChoic === computerChoice) {
            let message = `Ничья, я выбрал ${computerChoice}!`;
            message += `\nКоличество попыток: ${attempts}`;            
            
            alert(message);
            
            
        } else if ( (userChoic === 'камень' && computerChoice === 'ножницы') ||
                    (userChoic === 'ножницы' && computerChoice === 'бумага') || 
                    (userChoic === 'бумага' && computerChoice === 'камень')) {
            alert(`Не могу поверить, вы выбрали ${userChoic}, а я ${computerChoice}, вы победили! 🎉`);
            break;
        } else {
            alert(`Упс, вы выбрали ${userChoic}, а я ${computerChoice}, вы проиграли 👽`);
            break;
        }
    }
}

guesStoneGame();