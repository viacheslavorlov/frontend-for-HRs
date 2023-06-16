import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';
import { RequireAuth } from './RequireAuth';

describe('RequireAuth', () => {
    const TestComponent = () => <div data-testid="test-component">Test Component</div>;

    it('renders children if authenticated and has required roles', () => {
        const initialState = { user: { authData: { id: '1', roles: [UserRole.ADMIN] } } };
        act(() => {
            componentRender(
                <RequireAuth roles={[UserRole.ADMIN]}>
                    <TestComponent />
                </RequireAuth>,
                { initialState },
            );
        });

        expect(screen.getByTestId('test-component')).toBeInTheDocument();
    });

    // it('redirects to other route if not have  required role', () => {
    //     const initialState = {};
    //
    //     act(() => {
    //         componentRender(
    //             <RequireAuth roles={[UserRole.ADMIN]}>
    //                 <TestComponent />
    //             </RequireAuth>,
    //             { initialState },
    //         );
    //     });
    //
    //     expect(screen.queryByTestId('test-component')).not.toBeInTheDocument();
    // });
});
