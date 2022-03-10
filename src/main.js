function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
//mean
function mean(arr){
    let sum =arr.reduce((a, b) => a+b,0);
    return sum/arr.length;

}
//median
function median(arr){
    const arrsorted = arr.sort((a,b) => a-b);
    return arrsorted.length % 2 === 0 ?
     arrsorted[arrsorted.length/2-1]+ arrsorted[arrsorted.length/2] / 2 :
     arrsorted[Math.floor(arrsorted.length/2)] ;
}
//mode
function mode(arr){
    const frequencyTable ={};
    arr.forEach(elem => frequencyTable[elem]) = frequencyTable[elem] + 1 || 1 ;

    let modes = [];
    let maxFrequency = 0;
    for(const key in frequencyTable){
        if(frequencyTable[key]> maxFrequency){
            modes=[Number(key)];
            maxFrequency=frequencyTable[key];
        }
        else if (frequencyTable[key]=== maxFrequency){
            modes.push(Number(key));
        }

    }
    if(modes.length === Object.keys(frequencyTable).length)modes=[];
    return modes;
}