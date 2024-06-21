const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function cleanInputString(str) {
    const regex = /[\W_]/g;
    return str.replace(regex, '');
  }

const getInput = () => {
    const inputValue = textInput.value;
    const lowerCaseValue = inputValue.toLowerCase();
    const cleanValue = cleanInputString(lowerCaseValue).split("");

    const reverseValue = cleanValue.slice().reverse();

    if (cleanValue.length === 0) {
        alert("Please input a value");
    } else if (cleanValue.join() === reverseValue.join()) {
        result.innerText = `${inputValue} is a palindrome`;
    } else {
        result.innerText = `${inputValue} is not a palindrome`;
    }
    
    console.log(cleanValue);
    console.log(reverseValue);
}

checkBtn.addEventListener("click", getInput);