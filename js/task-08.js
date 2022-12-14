// 1/ Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2/ Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3/ Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4/ Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5/ Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", handlerSubmit)

function handlerSubmit(event) {
    event.preventDefault();
    let { email, password } = event.target.elements;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const loginData = {
        email: email.value,
        password: password.value,
    }
    console.log(loginData);
    event.currentTarget.reset();
}
