const dateOfBirth = document.querySelector("#date-of-birth");
const calculateNumber = document.querySelector("#calculate-number");
const userInput = document.querySelector("#lucky-number");
const displayMsg = document.querySelector("#output-container");

// console.log(dateOfBirth);
// console.log(calculateNumber);
// console.log(userInput);

function checkBirthDateIsLucky() {
    const Bdate = dateOfBirth.value;
    const luckyNumber = userInput.value;

    if (Bdate && luckyNumber) {
        const sum = calculateDateSum(Bdate);
        checkIsNumberLucky(sum, luckyNumber);
    } else {
        showMessage("Please enter both the fields");
    }
    // console.log(sum);
}

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
    if (sumOfDate % numberToCheck === 0) {
        return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
    }
    showMessage(`${numberToCheck} is not that lucky 😕`);
};

function calculateDateSum(BDate) {
    BDate = BDate.replaceAll("-", "");
    let sum = 0;

    for (let i = 0; i < BDate.length; i++) {
        sum = sum + Number(BDate.charAt(i));
    }

    return sum;
}

function showMessage(msg) {
    displayMsg.innerText = msg;
}

calculateNumber.addEventListener('click', checkBirthDateIsLucky)