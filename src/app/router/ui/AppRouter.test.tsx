import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdmin, getRouteArticles } from '@/shared/const/routerConst';
import { AppRouter } from './AppRouter';
import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

describe('appRouter/test', () => {
    test('should render', async () => {
        act(() => {
            componentRender(<AppRouter />, { route: getRouteAbout() });
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('redirect to forbidden page', async () => {
        act(() => {
            componentRender(<AppRouter />, {
                route: getRouteAdmin(),
                initialState: {
                    user: { authData: { id: '1', roles: [UserRole.USER] } },
                },
            });
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('redirect to main page', async () => {
        act(() => {
            componentRender(<AppRouter />, {
                route: getRouteArticles(),
                initialState: {},
            });
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('AdminPanelPage for Admin', async () => {
        act(() => {
            componentRender(<AppRouter />, {
                route: getRouteAdmin(),
                initialState: {
                    user: { authData: { id: '1', roles: [UserRole.ADMIN] } },
                },
            });
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });

    test('AdminPanelPage for Manager', async () => {
        act(() => {
            componentRender(<AppRouter />, {
                route: getRouteAdmin(),
                initialState: {
                    user: { authData: { id: '1', roles: [UserRole.MANAGER] } },
                },
            });
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
