/// <reference types='codeceptjs' />

const { I, mainPage, basketPage } = inject();

Given('Пользователь открывает страницу каталога', () => {
  mainPage.visit();
});

When('Пользователь нажимает кнопку корзины', () => {
  mainPage.clickBasketButton();
});

Then('Пользователь видит пустую корзину', async () => {
  I.seeElement(basketPage.emptyBasketSection)
});

