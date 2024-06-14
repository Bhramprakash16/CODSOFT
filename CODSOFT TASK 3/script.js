document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonType = button.getAttribute('data-type');
            const buttonValue = button.getAttribute('data-value');

            if (buttonType === 'number' || buttonType === 'decimal') {
                handleNumber(buttonValue);
            } else if (buttonType === 'operator') {
                handleOperator(buttonValue);
            } else if (buttonType === 'equals') {
                handleEquals();
            } else if (buttonType === 'clear') {
                handleClear();
            } else if (buttonType === 'backspace') {
                handleBackspace();
            }

            updateDisplay();
        });
    });

    function handleNumber(value) {
        if (currentInput.length < 10) {
            if (currentInput === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }
    }

    function handleOperator(value) {
        if (currentInput !== '') {
            if (previousInput !== '') {
                handleEquals();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    }

    function handleEquals() {
        if (previousInput !== '' && currentInput !== '' && operator !== '') {
            const previous = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            let result = 0;

            switch (operator) {
                case '+':
                    result = previous + current;
                    break;
                case '-':
                    result = previous - current;
                    break;
                case '*':
                    result = previous * current;
                    break;
                case '/':
                    result = previous / current;
                    break;
            }

            currentInput = result.toString();
            operator = '';
            previousInput = '';
        }
    }

    function handleClear() {
        currentInput = '';
        previousInput = '';
        operator = '';
    }

    function handleBackspace() {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
        }
    }

    function updateDisplay() {
        display.textContent = currentInput === '' ? '0' : currentInput;
    }
});
