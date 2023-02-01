export var ID_EMAIL = 'email';
export var ID_PASSWORD = 'password';
export var SUBMIT_BUTTON = 'submit_button';
export var EMAIL = 'ilya.makarov.co.il@gmail.com';
export var PASSWORD = 'Makarov@93';

export class LoginPage {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async login(email, password) {
    await commands.addText.byId(email,ID_EMAIL); 
    await commands.addText.byId(password, ID_PASSWORD);
    await commands.click.byName(SUBMIT_BUTTON);
  }
}