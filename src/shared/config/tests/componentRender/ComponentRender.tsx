import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../../i18testConfig/i18testConfig';

export interface RenderWithRouterOptions {
    route?: string
}
export function ComponentRender(component: ReactNode, options: RenderWithRouterOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
