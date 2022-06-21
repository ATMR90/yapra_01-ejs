// const login = document.getElementById('login').value;
// const password = document.getElementById('password').value;
//const login = 'fdt234';

document.addEventListener('DOMContentLoaded', start);

function start() {
    let login = 'dfgfdg435start'
    let password = 'fdgd345';
    console.log(document.getElementById('form__error'));
    document.getElementById('form__error').innerHTML = login;
    

    console.log('kjshf', login, password);

};

// document.querySelector('button').onclick = toggleForm;

// // document.getElementById('form__btn').addEventListener('click', toggleForm);
// function toggleForm() {
//     let login = document.getElementById('login').value;
//     console.log(login);
// };

function fun() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    console.log(login, password);
    document.getElementById('form__error').innerHTML = 'Login '+login+'. Password '+password;
};