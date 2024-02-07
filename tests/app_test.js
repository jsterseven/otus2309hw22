/// <reference types='codeceptjs' />

Feature('{Тестирование}');

Before(({ mainPage }) => {
    mainPage.visit()
})

Scenario('Открытие страницы пустой корзины после нажатия кнопки',  async ({ I, mainPage, basketPage }) => {
    mainPage.clickBasketButton()
    I.seeElement(basketPage.emptyBasketSection)
});

Scenario('Открытие меню каталога через бургер-кнопку',  async ({ I, mainPage }) => {
    mainPage.clickBurgerButton()
    I.seeElement(mainPage.burgerMenu)
});

Scenario('Появление тултипа авторизации при наведении на кнопку логина',  async ({ I, mainPage }) => {
    mainPage.hoverLoginButton()
    I.seeElement(mainPage.authTooltip)
});

Scenario('Открытие окошка чата поддержки',  async ({ I, chat }) => {
    chat.clickChatButton()
    I.seeElement(chat.chatWindow)
});

Scenario('Отображение заголовка ключевого слова поиска',  async ({ I, mainPage, searchPage }) => {
    mainPage.clickSearchInput()
    I.waitForElement('.main-page__content', 5)
    I.fillField(mainPage.searchInput, 'Губка')
    I.pressKey('Enter')
    I.see('Губка', searchPage.searchTitle)
});
