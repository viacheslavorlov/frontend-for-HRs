import { User } from '../../../src/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage/localStorage';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username = 'testuser', password = '123') => {
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

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;

            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
