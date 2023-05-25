import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/app/providers/TemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';

const root = createRoot(
    document.getElementById('root') as HTMLElement,
);

if (!root) {
    throw new Error('Контейнер "root" найден, не удалось вмонтировать приложение');
}

root.render(
    <BrowserRouter>
        <StoreProvider>
            <StrictMode>
                <ErrorBoundary>
                    <ThemeProvider>
                        <Suspense fallback={<PageLoader />}>
                            <App />
                        </Suspense>
                    </ThemeProvider>
                </ErrorBoundary>
            </StrictMode>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from '@/shared/const/theme/themeConst';
