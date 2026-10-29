const menu = document.getElementById("menu");

menu.innerHTML = `
    <ul>
        <li>
            <button data-message="Главная страница">
                Главная
            </button>
        </li>

        <li>
            <button>Игры ▼</button>

            <ul>
                <li>
                    <button data-message="Вы выбрали Minecraft">
                        Minecraft
                    </button>
                </li>

                <li>
                    <button data-message="Вы выбрали GTA">
                        GTA
                    </button>
                </li>

                <li>
                    <button data-message="Вы выбрали Roblox">
                        Roblox
                    </button>
                </li>
            </ul>
        </li>

        <li>
            <button>Информация ▼</button>

            <ul>
                <li>
                    <button data-message="Это учебный сайт">
                        О сайте
                    </button>
                </li>

                <li>
                    <button data-message="Сайт создан с помощью JavaScript">
                        Технологии
                    </button>
                </li>
            </ul>
        </li>

        <li>
            <button data-message="Спасибо за посещение сайта!">
                Контакты
            </button>
        </li>
    </ul>
`;


// ========================================
// 2. ОБРАБОТКА СООБЩЕНИЙ МЕНЮ
// ========================================

const message = document.getElementById("message");

menu.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        const text = event.target.dataset.message;

        if (text) {
            message.textContent = text;
        }

    }

});


// ========================================
// 3. ОБРАБОТКА СООБЩЕНИЙ МЫШИ
// ========================================

const mouseButton = document.getElementById("mouseButton");
const doubleButton = document.getElementById("doubleButton");
const mouseMessage = document.getElementById("mouseMessage");
const mouseArea = document.getElementById("mouseArea");


// Обычный клик

mouseButton.addEventListener("click", function() {
    mouseMessage.textContent = "Ты нажал кнопку мышью!";
});


// Двойной клик

doubleButton.addEventListener("dblclick", function() {
    mouseMessage.textContent = "Двойной клик успешно выполнен!";
});


// Наведение курсора

mouseArea.addEventListener("mouseenter", function() {
    mouseArea.textContent = "Курсор обнаружен!";
    mouseArea.style.backgroundColor = "#0284c7";
});


// Уход курсора

mouseArea.addEventListener("mouseleave", function() {
    mouseArea.textContent = "Наведи курсор сюда";
    mouseArea.style.backgroundColor = "";
});


// ========================================
// 4. ОБРАБОТКА СООБЩЕНИЙ КЛАВИАТУРЫ
// МИНИ-ИГРА НА РЕАКЦИЮ
// ========================================

const targetKey = document.getElementById("targetKey");
const gameMessage = document.getElementById("gameMessage");
const scoreText = document.getElementById("score");
const mistakesText = document.getElementById("mistakes");
const startButton = document.getElementById("startGame");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let score = 0;
let mistakes = 0;
let gameStarted = false;
let currentKey = "";


// Генерация случайной буквы

function newRound() {

    currentKey = letters[
        Math.floor(Math.random() * letters.length)
    ];

    targetKey.textContent = currentKey;

}


// Начало или перезапуск игры

function startGame() {

    score = 0;
    mistakes = 0;
    gameStarted = true;

    scoreText.textContent = score;
    mistakesText.textContent = mistakes;

    gameMessage.textContent =
        "Игра началась! Нажми нужную букву!";

    newRound();

}


// Кнопка запуска игры

startButton.addEventListener("click", startGame);


// Обработка нажатий клавиатуры

document.addEventListener("keydown", function(event) {

    // Enter начинает или перезапускает игру

    if (event.key === "Enter") {
        startGame();
        return;
    }

    // Остальные клавиши работают во время игры

    if (!gameStarted) {
        return;
    }

    // Проверка правильной буквы

    if (event.key.toUpperCase() === currentKey) {

        score++;

        scoreText.textContent = score;

        gameMessage.textContent =
            "Правильно! Отличная реакция!";

        // Победа при 10 очках

        if (score >= 10) {

            gameStarted = false;

            targetKey.textContent = "10/10";

            gameMessage.textContent =
                "ПОБЕДА! Ты набрал 10 очков! Нажми Enter, чтобы сыграть снова.";

            return;

        }

        // Следующая буква

        newRound();

    } else if (event.key.length === 1) {

        mistakes++;

        mistakesText.textContent = mistakes;

        gameMessage.textContent =
            "Ошибка! Попробуй ещё раз.";

    }

});