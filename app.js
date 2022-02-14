document.getElementById('calculator-body').addEventListener('click', function (event) {
    const inputValue = event.target.innerText;
    const screen = document.getElementById('screen');
    if (inputValue == 'C') {
        screen.value = ' ';
    } else if (inputValue == '=') {
        screen.value = eval(screen.value)
    }
    else {
        const previousValue = screen.value;
        const newValue = previousValue + inputValue;
        screen.value = newValue;
    }
})

