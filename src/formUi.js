import './styles/main.css';

export default class FormUi {
  constructor() {
    this.form = document.querySelector('form');
    this.inputEmail = this.form.querySelector('#input-email');
    this.inputCountry = this.form.querySelector('#input-country');
    this.inputPostalCode = this.form.querySelector('#input-postal-code');
    this.inputPassword = this.form.querySelector('#input-password');
    this.inputConfirmPassword = this.form.querySelector('#input-confirm-password');
    this.submitBtn = this.form.querySelector('input[type="submit"]');
    this.resultEl = document.querySelector('#result');
  }

  init() {
    this.handleTypeInputValidation();
    this.handleSubmitBtnValidation();
  }

  handleSubmitBtnValidation() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (
        this.inputEmail.checkValidity() &&
        this.inputCountry.checkValidity() &&
        this.inputPostalCode.checkValidity() &&
        this.inputPassword.checkValidity() &&
        this.inputConfirmPassword.checkValidity() &&
        this.inputConfirmPassword.value === this.inputPassword.value
      ) {
        this.resultEl.textContent = 'Success';
      } else {
        this.resultEl.textContent = 'Failed';
      }
    });
  }

  handleTypeInputValidation() {
    this.inputEmail.addEventListener('input', () => {
      const errEl = this.inputEmail.parentElement.querySelector('.error');
      if (!this.inputEmail.checkValidity()) {
        if (this.inputEmail.validity.valueMissing) {
          errEl.textContent = 'Enter an Email';
        } else if (this.inputEmail.validity.typeMismatch) {
          errEl.textContent = 'Must be an Email';
        } else if (this.inputEmail.validity.patternMismatch) {
          errEl.textContent = 'Must be in @gmail.com format';
        }
        this.inputEmail.classList.add('active');
      } else {
        errEl.textContent = '';
        this.inputEmail.classList.remove('active');
      }
    });

    this.inputCountry.addEventListener('input', () => {
      const errEl = this.inputCountry.parentElement.querySelector('.error');
      if (!this.inputCountry.checkValidity()) {
        if (this.inputCountry.validity.valueMissing) {
          errEl.textContent = 'Enter a Country';
        }
        this.inputCountry.classList.add('active');
      } else {
        errEl.textContent = '';
        this.inputCountry.classList.remove('active');
      }
    });

    this.inputPostalCode.addEventListener('input', () => {
      const errEl = this.inputPostalCode.parentElement.querySelector('.error');
      if (!this.inputPostalCode.checkValidity()) {
        if (this.inputPostalCode.validity.valueMissing) {
          errEl.textContent = 'Enter a Postal Code';
        } else if (
          this.inputPostalCode.validity.rangeUnderflow ||
          this.inputPostalCode.validity.rangeOverflow
        ) {
          errEl.textContent = 'Invalid Postal Code';
        }
        this.inputPostalCode.classList.add('active');
      } else {
        errEl.textContent = '';
        this.inputPostalCode.classList.remove('active');
      }
    });

    this.inputPassword.addEventListener('input', () => {
      const errEl = this.inputPassword.parentElement.querySelector('.error');
      if (!this.inputPassword.checkValidity()) {
        if (this.inputPassword.validity.valueMissing) {
          errEl.textContent = 'Enter a Password';
        } else if (this.inputPassword.validity.tooShort) {
          errEl.textContent = 'Too short';
        }
        this.inputPassword.classList.add('active');
      } else {
        errEl.textContent = '';
        this.inputPassword.classList.remove('active');
      }
    });

    this.inputConfirmPassword.addEventListener('input', () => {
      const errEl = this.inputConfirmPassword.parentElement.querySelector('.error');
      if (!this.inputConfirmPassword.checkValidity()) {
        if (this.inputConfirmPassword.validity.valueMissing) {
          errEl.textContent = 'Re-enter the Password';
        }
        this.inputConfirmPassword.classList.add('active');
      } else if (this.inputConfirmPassword.value !== this.inputPassword.value) {
        errEl.textContent = 'Password do not match';
        this.inputConfirmPassword.classList.add('active');
      } else {
        errEl.textContent = '';
        this.inputConfirmPassword.classList.remove('active');
      }
    });
  }
}

// TODO:
// Refactor: put all the validation blocks into separate functions and
// return for submitBtn validation.
