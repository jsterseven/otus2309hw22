const { I } = inject();

module.exports = {
    emptyBasketSection: { css: '.basket-page__basket-empty' },

    visit() {
        I.amOnPage('/lk/basket');
    },
};
