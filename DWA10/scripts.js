const MAX_NUMBER = 10
const MIN_NUMBER = -10


const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]');

const resetHandler = () => {
    number.value = 0;
    subtract.disabled = false;
    add.disabled = false;
    alert("the counter has been reset")
}


const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue

    if (add.disabled === true) {
        add.disable = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue 

    if (subtract.disable === true) {
        subtract.disable = false
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
   }
}

subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)

reset.addEventListener("click", resetHandler);

//reset.subtractEventListener("click", resetHandler);