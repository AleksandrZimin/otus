 const { expect } = require('@playwright/test');


exports.MainPage = class MainPage {

  // @param {import('@playwright/test').Page} page
 
  constructor(page) {
    this.page = page;
    this.getEmailInput = page.locator('input[id=email]');
    this.getPasswordInput = page.locator('input[id=password]');
    this.LKButton = page.locator('.v-icon-user-14')
    this.loginButton = page.locator('input[value=Войти]')
    this.errorField = page.getByText('Введен неверный логин или пароль')
    this.LKAuthButton = page.locator('.v-account-img').first()
    this.profileLink = page.getByRole('link', { name: 'Профиль' })
    this.bonusesLink = page.getByRole('link', { name: 'Баллы и бонусы' })
    this.ordersLink = page.getByRole('link', { name: 'Заказы' })

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
    await this.getPasswordInput.fill(password)
  }

  async clickOnLoginButton() {
    await this.loginButton.click()
  }

  async checkAuthError() {
    await expect(this.errorField).toBeVisible()
  }

  async clickOnLKAuthBtn() {
    await this.LKAuthButton.click()
  }

  async clickOnProfileLKBtn() {
    await this.profileLink.click()
  }

  async clickOnBonusesLKBtn() {
    await this.bonusesLink.click()
  }

  async clickOnProfileLKUserBtn() {
    await this.profileUserButton.click()
  }

  async clickOnOrdersLKUserBtn() {
    await this.ordersLink.click()
  }

  async clickLogo() {
    await this.logo.click()
  }
}
