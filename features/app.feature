Feature: Тестирование
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: Открытие страницы пустой корзины после нажатия кнопки
    Given Пользователь открывает страницу каталога
    When Пользователь нажимает кнопку корзины
    Then Пользователь видит пустую корзину
