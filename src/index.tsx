import { render } from 'react-dom';
import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/TemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import './shared/config/i18n/i18n';

render(
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <Suspense fallback="loading">
                        <App />
                    </Suspense>
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,

    document.getElementById('root'),
);
