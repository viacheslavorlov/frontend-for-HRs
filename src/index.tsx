import { render } from 'react-dom';
import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/TemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';

render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Suspense fallback="loading">
                    <App />
                </Suspense>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,

    document.getElementById('root'),
);
