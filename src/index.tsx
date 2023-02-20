import { render } from 'react-dom';
import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/TemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import App from './app/App';
import './shared/config/i18n/i18n';

render(
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
    </StrictMode>,

    document.getElementById('root'),
);
