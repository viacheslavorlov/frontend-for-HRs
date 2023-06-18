import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/config/tests/componentRender/ComponentRender';

const userId = '3';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: {
                            id: userId,
                        },

                    },
                },
            }}
            >
                <EditableProfileCard id={userId} />
            </TestProvider>,
        );
    });
});
