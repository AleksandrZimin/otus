// const { expect } = require('@playwright/test');


exports.MainPage = class MainPage {

  // @param {import('@playwright/test').Page} page
 
  constructor(page) {
    this.page = page;
    this.getEmailInput = page.locator('input[id=email]');
    this.getPasswordInput = page.locator('input[id=password]');
    this.LKButton = page.locator('.v-icon-user-14')
    this.loginButton = page.locator('input[value=Войти]')
    this.errorField = page.locator('p[class=form__field-error]')
    this.LKAuthButton = page.locator('.v-account-img')
    this.profileLink = page.getByRole('link', { name: 'Профиль' })
    this.profileUserButton = page.getByRole('link', {name: 'Зиминтест Александртест Владимировичтест testfs111@ya.ru'})
    this.profileText = page.locator('h1')
    this.logo = page.locator('svg').first()


  }

  async open() {
    await this.page.goto('')
  }

  async clickOnLKButton() {
    await this.LKButton.first().click()
  }

  async typeAuthorizationData(login, password) {
    await this.getEmailInput.click()
    await this.getEmailInput.fill(login)
    await this.getPasswordInput.click()
    await this.page.getPasswordInput.fill(password)
  }

  async clickOnLoginButton() {
    await this.loginButton.click()
  }

  async checkAuthError() {
    await this.errorField.toEq('Введен неверный логин или пароль')
  }

  async clickOnLKAuthBtn() {
    await this.LKAuthButton.first().click()
  }

  async clickOnProfileLKBtn() {
    await this.profileLink.click()
  }

  async clickOnProfileLKUserBtn() {
    await this.page.profileUserButton.click()
  }

  async userProfileText() {
    await this.profileText.toContainText('Профиль')
  }

  async clickLogo() {
    await this.logo.click()
  }
}
