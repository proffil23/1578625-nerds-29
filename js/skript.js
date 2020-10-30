var link = document.querySelector('.button-contacts');
var popup = document.querySelector('.popup');
var close = popup.querySelector('.button-close');

var form = popup.querySelector('.appointment-form');
var login = popup.querySelector('.popup-input-name');
var mail = popup.querySelector('.popup-input-email');

var storage = localStorage.getItem('popup-input-name');

// Открытие окна
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('popup');
      if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});


// закрытие окна
close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('popup');
    popup.classList.remove('popup-error');
});

// отправка формы
form.addEventListener('submit', function (event) {
        if (!login.value || !password.value) {
        popup.classList.remove('popup-error');
        //popup.offsetWidth = popup.offsetWidth;
        console.log('Нужно ввести имя и электронную почту');
        popup.classList.add('popup-error');
        event.preventDefault();
    } else {
        localStorage.setItem('name', login.value);
        localStorage.setItem('email', password.value);
    }
});

// закрытие на esc
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('popup')) {
            popup.classList.remove('popup');
            popup.classList.remove('popup-error');
        }
    }
});
