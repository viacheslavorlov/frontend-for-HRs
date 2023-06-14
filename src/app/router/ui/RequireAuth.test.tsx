import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';
import { RequireAuth } from './RequireAuth';

describe('RequireAuth', () => {
    const TestComponent = () => <div data-testid="test-component">Test Component</div>;

    it('renders children if authenticated and has required roles', () => {
        const initialState = { user: { authData: { id: '1', roles: [UserRole.ADMIN] } } };
        componentRender(
            <RequireAuth roles={[UserRole.ADMIN]}>
                <TestComponent />
            </RequireAuth>,
            { initialState },
        );

        expect(screen.getByTestId('test-component')).toBeInTheDocument();
    });

    it('redirects to main route if not authenticated', () => {
        const initialState = {};

        componentRender(
            <RequireAuth>
                <TestComponent />
            </RequireAuth>,
            { initialState },
        );

        expect(screen.queryByTestId('test-component')).not.toBeInTheDocument();
    });
    //
    // it('redirects to forbidden route if authenticated but does not have required roles', () => {
    //     const mockState = {
    //         user: {
    //             auth: true,
    //             roles: ['user'],
    //         },
    //     };
    //
    //     const mockStore = {
    //         ...store,
    //         getState: () => mockState,
    //     };
    //
    //     render(
    //         <Provider store={mockStore}>
    //             <BrowserRouter>
    //                 <RequireAuth roles={['admin']}>
    //                     <TestComponent />
    //                 </RequireAuth>
    //             </BrowserRouter>
    //         </Provider>,
    //     );
    //
    //     expect(screen.queryByTestId('test-component')).not.toBeInTheDocument();
    // });
});
