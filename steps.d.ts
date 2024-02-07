/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type searchPage = typeof import('./framework/pages/SearchPage.js');
type mainPage = typeof import('./framework/pages/MainPage.js');
type basketPage = typeof import('./framework/pages/BasketPage.js');
type chat = typeof import('./framework/elements/Chat.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, searchPage: searchPage, mainPage: mainPage, basketPage: basketPage, chat: chat }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
