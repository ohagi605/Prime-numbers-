// script.js
function checkPrime() {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(number) || number <= 0) {
        resultElement.textContent = "正の整数を入力してください。";
        resultElement.style.color = "red";
        return;
    }

    if (number === 1) {
        resultElement.textContent = "1は素数ではありません。";
        resultElement.style.color = "black";
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            resultElement.textContent = `${number} は素数ではありません。`;
            resultElement.style.color = "black";
            return;
        }
    }

    resultElement.textContent = `${number} は素数です！`;
    resultElement.style.color = "green";
}
