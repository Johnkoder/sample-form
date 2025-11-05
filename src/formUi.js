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
  }

  init() {
    console.log(this.submitBtn);
  }
}
