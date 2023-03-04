import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from '../../i18testConfig/i18testConfig';

export interface RenderWithRouterOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}
export function ComponentRender(component: ReactNode, options: RenderWithRouterOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
