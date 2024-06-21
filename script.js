const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const getInput = () => {
    const inputValue = textInput.value;
    if (inputValue.length === 0) {
        alert("Please input a value");
    } else {
        checkBtn.innerText = "vrai";
    }
}

checkBtn.addEventListener("click", getInput);
