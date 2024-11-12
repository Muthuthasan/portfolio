const form = document.getElementById('form');

const username = document.getElementById('username');

const number = document.getElementById('number');

const email = document.getElementById('email');

form.addEventListener('submit',e =>{

    e.preventDefault();

    validateinputs();


});

const setError = (element, message) =>{

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');


}

const setSuccess = element =>{

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');


};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateinputs=() =>{

    const usernameValue = username.value.trim();

    const numberValue = number.value.trim();

    const emailValue = email.value.trim();


/*name*/
if(usernameValue === ''){
    setError(username, 'Username is required');
}
else
{
setSuccess(username);
}

/*number*/
if(numberValue === ''){
    setError(number, 'Number is required');
}
else if(numberValue.length < 10){
    setError(number, 'Number must be a 10 Number');
}
else
{
setSuccess(number);
}



if(emailValue === ''){
    setError(email, 'Email is required');
}
else if(!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email address');
}
else
{
setSuccess(email);
}

};