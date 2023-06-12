import { selectByTestId } from '../../helpers/selectByTestId';

describe('template spec', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Главная страница', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('переадресация на главную страницу', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('переход на несуществующую страницу', () => {
            cy.visit('/asdfasdfa');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Вход в профиль', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Вход на страницу статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlePage')).should('exist');
        });
        it('переход к статье', () => {
            cy.visit('/articles/1');
            cy.get(selectByTestId('ArticleDetailedPage')).should('exist');
        });
    });
});
