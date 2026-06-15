// Завдання 1

// "Порівняння кількох промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.

function delayedPromise(ms, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        },delay)
    })
}

const logger = time => console.log(`Resolved after ${time}ms`);

delayedPromise(100, 30).then(logger);
delayedPromise(200, 50).then(logger);
delayedPromise(1000, 100).then(logger);


const arrayPrimise = [
    delayedPromise(10, 1000),
    delayedPromise(20, 2000),
    delayedPromise(30, 3000),
    delayedPromise(40, 4000),
    delayedPromise(50, 5000)
];

Promise.all(arrayPrimise).then(res => {console.log(res)});

// ===============================================================================

// Завдання 2

// "Змагання промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

// Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.

function randomDelay(value) {

    const delay = Math.random() * (5000 - 1000) + 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        },delay)
    })
}

const promises = [
    randomDelay(456),
    randomDelay(654),
    randomDelay(43),
    randomDelay(876),
    randomDelay(465)
]

Promise.race(promises).then((res) => {console.log(res)})