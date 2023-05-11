// 1. Реализуйте метод, который запрашивает у пользователя ввод дробного числа (типа float),
// и возвращает введенное значение. Ввод текста вместо числа не должно приводить к падению
// приложения, вместо этого, необходимо повторно запросить у пользователя ввод данных.

function getFloatFromUserInput(): number {
    const userInput = prompt("Enter a float number: ");

    const floatValue = parseFloat(userInput);

    if (isNaN(floatValue)) {
        // User entered an invalid input
        alert("Invalid input. Please enter a float number.");
        return getFloatFromUserInput();
    }

    return floatValue;
}

const floatNum = getFloatFromUserInput();
alert(floatNum);

// 2. Если необходимо, исправьте данный код.

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // for example
let catchedRes1: number = 0; // for example
let d = 3; // for example

try {
    if (d !== 0) {
        catchedRes1 = intArray[8] / d;
    }
    console.log("catchedRes1 = " + catchedRes1);
} catch (e: any) {
    if (e instanceof Error) {
        console.log("Catching Error: " + e.message);
    } else {
        console.log("Catching Exception: " + e);
    }
}

// 3. Если необходимо, исправьте данный код.

class NullPointerException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NullPointerException";
    }
}

class IndexOutOfBoundsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "IndexOutOfBoundsException";
    }
}

function main(): void {
    try {
        const a: number = 90;
        const b: number = 3;
        console.log(a / b);
        printSum(23, 234);
        const abc: number[] = [1, 2];
        abc[1] = 9;
    } catch (ex) {
        if (ex instanceof Error) {
            console.log("Что-то пошло не так...");
        } else if (ex instanceof NullPointerException) {
            console.log("Указатель не может указывать на null!");
        } else if (ex instanceof IndexOutOfBoundsException) {
            console.log("Массив выходит за пределы своего размера!");
        }
    }
}

function printSum(a: number, b: number): void {
    console.log(a + b);
}


// 4. Разработайте программу, которая выбросит Exception, когда пользователь вводит пустую строку.
// Пользователю должно показаться сообщение, что пустые строки вводить нельзя.

function getUserInput(): string {
    const input: string = prompt("Введите строку:");
    if (input === "") {
        throw new Error("Необходимо вводить непустые строки!");
    }
    return input;
}

try {
    const userInput: string = getUserInput();
    console.log(`Вы ввели: ${userInput}`);
} catch (ex) {
    console.log(ex.message);
}

