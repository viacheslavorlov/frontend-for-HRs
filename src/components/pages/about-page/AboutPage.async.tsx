import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    //! так делать не стоит это только для показательности длительной загрузки
    // @ts-ignore
    setTimeout(()=> resolve(import('./AboutPage')), 1500)
}));