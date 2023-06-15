const profileId = '3';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${profileId}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('1Профиль загружен', () => {
        cy.getByTestId('EditableProfileCard.FirstName').should('have.value', 'testFirstname');
        cy.getByTestId('EditableProfileCard.LastName').should('have.value', 'testLastname');
        cy.getByTestId('EditableProfileCard.Username').should('have.value', 'testuser');
    });

    it('2Профиль изменен', () => {
        cy.updateProfile();
        cy.getByTestId('EditableProfileCard.FirstName').should('have.value', 'newFirst');
        cy.getByTestId('EditableProfileCard.LastName').should('have.value', 'newLast');
        cy.getByTestId('EditableProfileCard.Username').should('have.value', 'testuser');
    });
});
