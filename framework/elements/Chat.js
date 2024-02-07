const { I } = inject();

module.exports = {
  chatButton: { css: '.j-btn-chat-open' },
  chatWindow : { css: '.chat' },

  clickChatButton () {
    I.click(this.chatButton)
  },
}
