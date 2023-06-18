import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage/localStorage';

export const updateProfile = (firstName: string, lastname: string) => {
    cy.getByTestId('EditableProfileCard.EditButton').click();
    cy.getByTestId('EditableProfileCard.FirstName')
        .clear()
        .type(firstName || 'newFirst');
    cy.getByTestId('EditableProfileCard.LastName')
        .clear()
        .type(lastname || 'newLast');
    cy.getByTestId('EditableProfileCard.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'auth' },
        body: {
            id: '3',
            first: 'testFirstname',
            last: 'testLastname',
            age: 33,
            currency: 'EUR',
            country: 'Belarus',
            city: 'Novgorod',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
