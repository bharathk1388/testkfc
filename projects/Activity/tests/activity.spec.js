// @ts-check
const { test, expect } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))
const {waitFor2seconds} = require("./util")
test.beforeEach("Open the website",async({page})=>{
    await page.goto('https://www.saucedemo.com/');
})

test('Verify login functionality with positive testdata', async ({ page }) => {
  await page.fill('#user-name',testdata.userName);
  await page.fill('#password',testdata.password);
  await page.click('#login-button');
  await waitFor2seconds();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('negative test data with wrong userName', async ({ page }) => {
    // wrong username
    await page.fill('#user-name',testdata.wronguserName);
    await page.fill('#password',testdata.password);
    await page.click('#login-button');
    await waitFor2seconds();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('negative test data with wrong password', async ({ page }) => {
    
    await page.fill('#user-name',testdata.userName);
    // wrong password
    await page.fill('#password',testdata.wrongPassword);
    await page.click('#login-button');
    await waitFor2seconds();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('Adding Products to the Cart', async ({ page }) => {
    await page.fill('#user-name',testdata.userName);
    await page.fill('#password',testdata.password);
    await page.click('#login-button');
    await page.waitForSelector('#add-to-cart-sauce-labs-onesie')
   
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.click('#add-to-cart-sauce-labs-onesie');
    await page.click('#add-to-cart-sauce-labs-bike-light')
    await page.click("a[data-test='shopping-cart-link']")
    await page.waitForSelector("//div[contains(text(),'Sauce Labs Bike Light')]")

    // verication of added products in the cart. 
    const saucelabbacklight= page.locator("//div[contains(text(),'Sauce Labs Bike Light')]")
    expect(saucelabbacklight).toBeVisible()
    const saucelabsconesie = page.locator("//div[contains(text(),'Sauce Labs Onesie')]")
    expect(saucelabsconesie).toBeVisible()
    await page.waitForTimeout(2000);
  });
  test('Checkout Process', async ({ page }) => {
    await page.fill('#user-name',testdata.userName);
    await page.fill('#password',testdata.password);
    await page.click('#login-button');
    await waitFor2seconds();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.click('#add-to-cart-sauce-labs-onesie');
    await page.click('#add-to-cart-sauce-labs-bike-light')
    await page.click("a[data-test='shopping-cart-link']")
    await page.waitForSelector("//div[contains(text(),'Sauce Labs Bike Light')]")

    const saucelabbacklight= page.locator("//div[contains(text(),'Sauce Labs Bike Light')]")
    expect(saucelabbacklight).toBeVisible()
    const saucelabsconesie = page.locator("//div[contains(text(),'Sauce Labs Onesie')]")
    expect(saucelabsconesie).toBeVisible()
    await waitFor2seconds();
    await page.click('#checkout');
    await waitFor2seconds();
    // Checkout Process
    const checkoutInfo= page.locator("//span[contains(text(),'Checkout: Your Information')]")
    expect(checkoutInfo).toBeVisible();

    await page.fill('#first-name',testdata.firstName)
    await page.fill('#last-name',testdata.lastName)
    await page.fill('#postal-code',testdata.postalCode)
    await page.click('#continue')

    await waitFor2seconds();

    const checkoutTotal= page.locator('div > div.summary_info > div.summary_total_label')
    expect(checkoutTotal).toBeVisible()

    await page.click('#finish')
    await waitFor2seconds();

    const checkSuccessMesg=page.locator('h2.complete-header')
    expect(checkSuccessMesg).toBeVisible()

  });
  test('Logout Functionality', async ({ page }) => {
    // verification of Logout function 
    await page.fill('#user-name',testdata.userName);
    await page.fill('#password',testdata.password);
    await page.click('#login-button');
    await page.waitForSelector('#logout_sidebar_link');
    await page.click('#react-burger-menu-btn')
    await page.click('#logout_sidebar_link')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});