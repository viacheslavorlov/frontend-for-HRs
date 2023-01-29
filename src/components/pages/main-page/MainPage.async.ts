import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    //! так делать не стоит это только для показательности длительной загрузки
    // @ts-ignore
    setTimeout(()=> resolve(import('./MainPage')), 1500)
}));