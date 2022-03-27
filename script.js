// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
const charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()_+-={}[]|\:;<>?,./";
const charArray = charString.split('');

// create a global variable called "pwLength" with a number between 10 and 18
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
const addNewPassword = () => {
    //console.log('password length is     ' + pwLength);
    //Adds 1 to max because Math.floor; without adding 1 it will never choose 18
    const pwLength = getRandomNumber(10, 19);  
    const result = [];
    for (let i = 0; i < pwLength; i ++) {
        result.push(charArray[getRandomNumber(0, charArray.length + 1)]);
    }
    return result.join('');
}

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
//console.log(addNewPassword());