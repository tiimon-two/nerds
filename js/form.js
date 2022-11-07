const formButton = document.querySelector('.find-us-button');
const contactUs = document.querySelector('.contact-us');
const popupClose = contactUs.querySelector('.modal-close');
const form = contactUs.querySelector('.contact-us-form');
const formName = form.querySelector('[name]');
const formEmail = form.querySelector('.contact-email');
const formText = form.querySelector('.contact-text');
let storageName = '';
let storageEmail = '';
let isStorageSupport = true;

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

formButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  contactUs.classList.add('modal-show');
  formText.value = '';

  if (isStorageSupport) {
    formName.value = storageName;
    formEmail.value = storageEmail;
  }

  if (formName.value) {
    formEmail.focus();
  } else {
    formName.focus();
  }

  if (formName.value && formEmail.value) {
    formText.focus();
  }
});

popupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  contactUs.classList.remove('modal-show');
  contactUs.classList.remove('modal-error');
});

window.addEventListener('keydown', function(evt) {
  if (contactUs.classList.contains('modal-show')) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      contactUs.classList.remove('modal-show');
    }
  }
});

form.addEventListener('submit', function(evt) {
  if (!formName.value || !formEmail.value) {
    evt.preventDefault();
    contactUs.classList.remove('modal-error');
    contactUs.offsetWidth = contactUs.offsetWidth;
    contactUs.classList.add('modal-error');

  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', formName.value);
      localStorage.setItem('email', formEmail.value);
    }
  }
});
