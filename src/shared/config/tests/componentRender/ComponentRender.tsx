import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '@/shared/const/theme/themeConst';
// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import { ThemeProvider } from '@/app/providers/TemeProvider';
// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '../../i18testConfig/i18testConfig';

export interface RenderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestPrividerProps {
    children: ReactNode;
    options?: RenderWithRouterOptions;
}

export const TestProvider = (props: TestPrividerProps) => {
    const { children, options = {} } = props;
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export function componentRender(component: ReactNode, options: RenderWithRouterOptions = {}) {
    return render(
        <TestProvider options={options}>{component}</TestProvider>,
    );
}
