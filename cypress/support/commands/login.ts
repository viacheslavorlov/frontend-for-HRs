import { User } from '../../../src/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage/localStorage';

export const login = (username: string = 'user', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },

    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>

        }
    }
}
