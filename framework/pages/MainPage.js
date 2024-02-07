const { locator } = require("codeceptjs");

const { I } = inject();

module.exports = {
  basketButton: new locator('[data-wba-header-name="Cart"]'),
  burgerButton: new locator('button.nav-element__burger'),
  searchInput: new locator('input#searchInput'),
  searchInput: { css: 'input#searchInput' } ,
  loginButton: new locator('.navbar-pc__link[data-wba-header-name="Login"]'),
  burgerMenu: new locator('.menu-burger'), 
  authTooltip : new locator('.tooltip-profile--not-auth'), 

  visit () {
    I.amOnPage('/')
  },

  clickBasketButton () {
    I.click(this.basketButton)
  },

  clickBurgerButton () {
    I.click(this.burgerButton)
  },

  clickSearchInput () {
    I.click(this.searchInput)
  },

  hoverLoginButton () {
    I.moveCursorTo(this.loginButton)
  }
}
