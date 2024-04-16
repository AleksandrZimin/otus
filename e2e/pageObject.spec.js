// @ts-check
import { test } from '@playwright/test'
import { MainPage } from '../pages/mainPage.js'
import { LkPage } from '../pages/lkPage.js'

test('Авторизация', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.open()
  await mainPage.clickOnLKButton()
  await mainPage.typeAuthorizationData('test111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await mainPage.checkAuthError()
  await mainPage.typeAuthorizationData('testfs111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await mainPage.clickOnLKAuthBtn()
  await mainPage.clickOnProfileLKBtn()

  const lkPage = new LkPage(page)
  await lkPage.clickOnProfileLKUserBtn()
  await lkPage.userProfileText()

  await mainPage.clickLogo()
})


test('Персональные данные', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.open()
  await mainPage.clickOnLKButton()
  await mainPage.typeAuthorizationData('testfs111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await mainPage.clickOnLKAuthBtn()
  await mainPage.clickOnProfileLKBtn()

  const lkPage = new LkPage(page)
  await lkPage.clickOnProfileLKUserBtn()
  await lkPage.userProfileText()
  await lkPage.checkTabName()
  await lkPage.checkPersonInfo()
  await lkPage.checkPersonName()
  await lkPage.checkChooseToursTitle()
  await lkPage.checkContactsTitle()
})

test('Документы', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.open()
  await mainPage.clickOnLKButton()
  await mainPage.typeAuthorizationData('testfs111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await mainPage.clickOnLKAuthBtn()
  await mainPage.clickOnProfileLKBtn()

  const lkPage = new LkPage(page)
  await lkPage.clickOnProfileLKUserBtn()
  await lkPage.userProfileText()
  await lkPage.checkTabName()

  await lkPage.chooseTabDocuments()
  await lkPage.checkpassportTitle()
  await lkPage.checkAnotherPassportTitle()
  await lkPage.checkAnotherDocumentTitle()
})

test('Заказы', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.open()
  await mainPage.clickOnLKButton()
  await mainPage.typeAuthorizationData('testfs111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await mainPage.clickOnLKAuthBtn()
  await mainPage.clickOnOrdersLKUserBtn()

  const lkPage = new LkPage(page)
  await lkPage.checkOrderPageTitle()
  await lkPage.checkOrderTabs()
  await lkPage.checkorderText()
  await lkPage.checkorderButton()
})

test('Программа лояльности', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.open()
  await mainPage.clickOnLKButton()
  await mainPage.typeAuthorizationData('testfs111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await mainPage.clickOnLKAuthBtn()
  await mainPage.clickOnBonusesLKBtn()

  const lkPage = new LkPage(page)
  await lkPage.checkbonusesPageTitle()
  await lkPage.checkprogressFrame()
  await lkPage.checktexTitle()
  await lkPage.checkAnswersContent()
})
