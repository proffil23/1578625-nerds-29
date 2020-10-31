var popup = document.querySelector('.popup');
var openPopupButton = document.querySelector('.button-contacts');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('active');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('active');
});
