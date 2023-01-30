import {render} from "react-dom";
import App from "./app/App";
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/themeProvider";
import React from "react";

render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,

    document.getElementById('root')
)