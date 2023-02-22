import { render } from 'react-dom';
import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/TemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';

render(
    <StoreProvider>
        <StrictMode>
            <ErrorBoundary>
                <BrowserRouter>
                    <ThemeProvider>
                        <Suspense fallback={<PageLoader />}>
                            <App />
                        </Suspense>
                    </ThemeProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </StrictMode>
    </StoreProvider>,

    document.getElementById('root'),
);
