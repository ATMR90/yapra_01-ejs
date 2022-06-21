

document.addEventListener('DOMContentLoaded', start);


function start() {
	// let login = document.querySelectorAll('.input');
	// console.log(login);
	// let inputLogin = document.querySelectorAll('input');
	// console.log(inputLogin);
	// for (let elem of inputLogin) {
	// 	elem.addEventListener("focus", () => {
	// 		inputLogin[i].classList.add('input_active');
	// 	}, 
	// 	true);
	// 	elem.addEventListener("blur", () => {
	// 		inputLogin[i].classList.remove('input_active');
	// 	}, 
	// 	true);
	// }

	let login = document.getElementById('login');
	// if (login.addEventListener) {
	// 	console.log('hfgh');
	// }
	// login.addEventListener('focus', function() {
	// 	login.classList.remove('input_error');
	// }, true);
	login.addEventListener('focus', () => {
		login.classList.remove('input_error');
	}, 
	true);
	let password = document.getElementById('password');
	password.addEventListener("focus", () => {
		password.classList.remove('input_error');
		document.getElementById('submit__error').innerHTML = '';
	}, 
	true);
	// login.addEventListener("blur", (e) => {
	// 		if (e.target.value === '') {
	// 			login.classList.add('input_error');
	// 		}
	// 	}, 
	// 	true);

	// let login = document.getElementById('login');
	// let inputLogin = document.getElementById('inputLogin');
	// login.addEventListener("focus", () => {
	// 	inputLogin.classList.add('input_active');
	// }, 
	// true);
	// login.addEventListener("blur", () => {
	// 	inputLogin.classList.remove('input_active');
	// }, 
	// true);
};

function singInBtn() {
	let login = document.getElementById('login');
	let password = document.getElementById('password');
	if (login.value === '') {
		login.classList.add('input_error');
	}
	if (password.value === '') {
		password.classList.add('input_error');
		document.getElementById('submit__error').innerHTML = 'Пароль содержит недопустимые символы';
	}
};


