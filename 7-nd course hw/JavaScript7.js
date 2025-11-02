function Completeloading() {
  console.log("Загрузка файла успешно завершена");

  console.log("Обработка файла...");
  setTimeout(() => {
    console.log("Файл обработан.");

    console.log("Сохранения файла");
    setTimeout(() => {
        console.log("Файл успешно сохранён, файл готов к использованию");
    }, 1000);
  }, 2000);
}

function loading(callback) {
    console.log("Начало загрузки файла...");

    let progress = 0;
    const intervalID = setInterval(() => {
        // Генерируем случайное значение, но не позволяем прогрессу превысить 100%
        const increment = Math.floor(Math.random() * 10) + 5;
        
        // Проверяем, не превысит ли новый прогресс 100%
        if (progress + increment >= 100) {
            progress = 100; // Устанавливаем ровно 100%
        } else {
            progress += increment; // Иначе добавляем как обычно
        }
        
        console.log(`Прогресс ${progress}%`);

        if (progress >= 100) {
            clearInterval(intervalID);
            console.log("Загрузка файла завершена!");
            if (callback) {
                callback();
            }
        }
    }, 2000);
}

loading(Completeloading);