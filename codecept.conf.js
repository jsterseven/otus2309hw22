exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.wildberries.ru',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    searchPage: './framework/pages/SearchPage.js',
    mainPage: "./framework/pages/MainPage.js",
    basketPage: "./framework/pages/BasketPage.js",
    chat: "./framework/elements/Chat.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/app_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'cypress-to-codeceptjs'
}