import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Main page', async ({page}) => {

  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle("Официальный сайт туроператора FUN&SUN (ex TUI) - купить путевки по низким ценам в 2024 году");
  });
  
  test('header links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('img[class=v-logo__img]')).toBeVisible();
    await expect(page.getByText('Подобрать тур').first()).toContainText('Подобрать тур');
    await expect(page.locator('div[class=expert-flex]')).toContainText('Эксперты online');
    await expect(page.getByRole('banner').getByRole('link', { name: 'Офисы продаж' })).toContainText('Офисы продаж');
    await expect(page.getByRole('link', { name: 'Вход для агентов' })).toContainText('Вход для агентов');
    await expect(page.getByText('Москва').first()).toContainText('Москва');
    await expect(page.locator('#snapshotPhone')).toContainText('8 800 775 775 8');
    await expect(page.locator('.v-icon-user-14').first()).toBeVisible();
    await expect(page.locator('.account__favourites > a')).toBeVisible();
    await expect(page.locator('.v-icon-compare-header')).toBeVisible();
    await expect(page.locator('#v-basket span')).toBeVisible();
  });

  test('Menu links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Туры', exact: true })).toBeVisible();
    await expect(page.locator('a[href="/searchhotel"]').first()).toBeVisible();
    await expect(page.locator('a[href="/avia"]').first()).toBeVisible();
    await expect(page.locator('a[href="/kruizy"]')).toBeVisible();
    await expect(page.getByText('Поиск по странам')).toBeVisible();
    await expect(page.locator('a[href="/actions"]').first()).toBeVisible();
    await expect(page.locator('a[href="/searchhottours"]').first()).toBeVisible();
  });

  test('Search tours', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.tour-search__flex-container')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Город', exact: true })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Страна, город, отель' })).toBeVisible();
    await expect(page.locator('.calendar-field__body_title')).toBeVisible();
    await expect(page.locator('.nights-field__body_title')).toBeVisible();
    await expect(page.locator('.tourists-field__body_tourists')).toBeVisible();
    await expect(page.locator('.tour-search__button')).toBeVisible();
  });

  test('Search hotels', async ({page}) => {
    await page.goto('/');
    await page.locator('a[href="/searchhotel"]').first().click()
    await expect(page.locator('.arrival-country-field__pinput')).toBeVisible();
    await expect(page.locator('.calendar-field__body_dates')).toBeVisible();
    await expect(page.locator('.nights-field__body_nights')).toBeVisible();
    await expect(page.locator('.tourists-field__body_tourists')).toBeVisible();
    await expect(page.locator('.tour-search__button')).toBeVisible();
  })
})

