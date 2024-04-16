// @ts-check
import { test, expect } from '@playwright/test'
import { MainPage } from '../pages/mainPage.js'
import { LkPage } from '../pages/lkPage.js'

test('Authorization', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.open()
  await mainPage.clickOnLKButton()
  await mainPage.typeAuthorizationData('test111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  await expect(mainPage.checkAuthError())
  await mainPage.typeAuthorizationData('testfs111@ya.ru', 'Zimin1993!')
  await mainPage.clickOnLoginButton()
  // await page.getByRole('banner').locator('img').nth(2).click();
  await mainPage.clickOnLKAuthBtn()
  await mainPage.clickOnProfileLKBtn()

  const lkPage = new LkPage(page)
  await lkPage.clickOnProfileLKUserBtn()
  await lkPage.userProfileText()

  await mainPage.clickLogo()
})
