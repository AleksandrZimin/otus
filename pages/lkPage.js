const { expect } = require('@playwright/test');


exports.LkPage = class LkPage {

  // @param {import('@playwright/test').Page} page
 
  constructor(page) {
    this.page = page;
    this.profileUserButton = page.getByRole('link', {name: 'Зиминтест Александртест Владимировичтест testfs111@ya.ru'})
    this.profileText = page.locator('h1')
    this.tabName = page.getByText('Персональные данные').first()
    this.personInfiTitle = page.getByText('Личная информация')
    this.chooseToursTitle = page.getByText('Предпочтения в отдыхе')
    this.contactsTitle = page.getByText('Контакты')
    this.personName = page.getByText('Зиминтест Александртест Владимировичтест')
    this.tabDocuments = page.getByText('Документы').first()

    this.passportTitle = page.getByText('Паспорта РФ')
    this.anotherPassportTitle = page.getByText('Загранпаспорта')
    this.anotherDocumentTitle = page.getByText('Свидетельства о рождении')

    this.bonusesPageTitle = page.getByText('Программа лояльности Fun&Sun Friends').first()
    this.progressFrame = page.locator('.table-main')
    this.answersContent = page.locator('.answers-content')
    this.textTitle = page.getByText('Ответы на частые вопросы').first()

    this.orderTitle = page.getByText('Заказы').first()
    this.orderTab1 = page.getByText('Предстоящие').first()
    this.orderTab2 = page.getByText('Прошлые').first()
    this.orderTab3 = page.getByText('Отмененные').first()
    this.orderTab4 = page.getByText('Незавершенные').first()
    this.orderText = page.getByText('У вас нет предстоящих путешествий.')
    this.orderButton = page.locator('.yellow-btn').first()








  }


  async clickOnProfileLKUserBtn() {
    await this.profileUserButton.click()
  }

  async userProfileText() {
    await expect(this.profileText).toBeVisible()
  }

  async checkTabName() {
    await expect(this.tabName).toBeVisible()
  }

  async checkPersonInfo() {
    await expect(this.personInfiTitle).toBeVisible()
  }

  async checkPersonName() {
    await expect(this.personName).toBeVisible()
  }

  async checkChooseToursTitle() {
    await expect(this.chooseToursTitle).toBeVisible()
  }

  async checkContactsTitle() {
    await expect(this.contactsTitle).toBeVisible()
  }

  async chooseTabDocuments() {
    await this.tabDocuments.click()
  }

  async checkpassportTitle() {
    await expect(this.passportTitle).toBeVisible()
  }

  async checkAnotherPassportTitle() {
    await expect(this.anotherPassportTitle).toBeVisible()
  }

  async checkAnotherDocumentTitle() {
    await expect(this.anotherDocumentTitle).toBeVisible()
  }

  async checkbonusesPageTitle() {
    await expect(this.bonusesPageTitle).toBeVisible()
  }

  async checkOrderPageTitle() {
    await expect(this.orderTitle).toBeVisible()
  }

  async checkprogressFrame() {
    await expect(this.progressFrame).toBeVisible()
  }

  async checktexTitle() {
    await expect(this.textTitle).toBeVisible()
  }

  async checkAnswersContent() {
    await expect(this.answersContent).toBeVisible()
  }

  async checkOrderTabs() {
    await expect(this.orderTab1).toBeVisible()
    await expect(this.orderTab2).toBeVisible()
    await expect(this.orderTab3).toBeVisible()
    await expect(this.orderTab4).toBeVisible()
  }

  async checkorderText() {
    await expect(this.orderText).toBeVisible()
  }

  async checkorderButton() {
    await expect(this.orderButton).toBeVisible()
  }

}
