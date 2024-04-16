// const { expect } = require('@playwright/test');


exports.LkPage = class LkPage {

  // @param {import('@playwright/test').Page} page
 
  constructor(page) {
    this.page = page;
    this.profileUserButton = page.getByRole('link', {name: 'Зиминтест Александртест Владимировичтест testfs111@ya.ru'})
    this.profileText = page.locator('h1')

  }


  async clickOnProfileLKUserBtn() {
    await this.page.profileUserButton.click()
  }

  async userProfileText() {
    await this.profileText.toContainText('Профиль')
  }

  async clickLogo() {
    await this.page.locator('svg').first().click()
  }
}
