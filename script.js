let expression = "";
let displayExpression = "";

function updateDisplay(value) {
    expression += value;
    displayExpression += value;
    updateScreen();
}

function handlePower() {
    expression += "**";
    displayExpression += "^";
    updateScreen();
}

function handleSqrt() {
    expression += "Math.sqrt(";
    displayExpression += "√";
    updateScreen();
}

function handleMod() {
    expression += "%";
    displayExpression += "%";
    updateScreen();
}

function calculateResult() {
    try {
        let open = (expression.match(/\(/g) || []).length;
        let close = (expression.match(/\)/g) || []).length;
        expression += ")".repeat(open - close);

        let result = eval(expression);
        document.getElementById("result").innerText = "= " + result;

        expression = result.toString();
        displayExpression = result.toString();
    } catch {
        document.getElementById("result").innerText = "= Error";
    }
}

function clearDisplay() {
    expression = "";
    displayExpression = "";
    updateScreen();
    document.getElementById("result").innerText = "";
}

function deleteLast() {
    if (expression.endsWith("Math.sqrt(")) {
        expression = expression.slice(0, -10);
        displayExpression = displayExpression.slice(0, -2);
    } else if (expression.endsWith("**")) {
        expression = expression.slice(0, -2);
        displayExpression = displayExpression.slice(0, -1);
    } else {
        expression = expression.slice(0, -1);
        displayExpression = displayExpression.slice(0, -1);
    }
    updateScreen();
}

function updateScreen() {
    document.getElementById("expression").innerText = displayExpression;
}
