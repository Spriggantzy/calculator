const display = document.getElementById("display");

function appendValue(value) {
    const current = display.value;
    if (value === ".") {
        const parts = current.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) return;
    }
    if (current === "0" && value !== "." && !isOperator(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function isOperator(val) {
    return ["+", "-", "*", "/", "**", "%"].includes(val);
}

function clearDisplay() {
    display.value = "0";
}

function toggleSign() {
    const current = display.value;
    if (!current || current === "0") return;
    if (current.startsWith("-")) {
        display.value = current.slice(1);
    } else {
        display.value = "-" + current;
    }
}

function calculate() {
    try {
        let expr = display.value;
        expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        let result = eval(expr);
        display.value = parseFloat(result.toFixed(10));
    } catch (error) {
        display.value = "Алдаа";
    }
}

function calculateSqrt() {
    try {
        const val = parseFloat(display.value);
        if (val < 0) {
            display.value = "Алдаа";
            return;
        }
        display.value = parseFloat(Math.sqrt(val).toFixed(10));
    } catch (error) {
        display.value = "Алдаа";
    }
}