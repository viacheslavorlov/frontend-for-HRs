import {RouteProps} from "react-router-dom";
import {AboutPage, MainPage} from "pages";

export enum AllRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

const RoutePaths: Record<AllRoutes, string> = {
    [AllRoutes.MAIN]: '/',
    [AllRoutes.ABOUT]: '/about'
}

//? Более сложный вариант с Record
export const routeConfig: Record<AllRoutes, RouteProps> = {
    [AllRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [AllRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage/>
    }
}

//? более простой вариант с массивом
// export const routeConfig: RouteProps[] = [
//     {path: RoutePaths.main, element: <MainPage/>},
//     {path: RoutePaths.about, element: <AboutPage/>}
// ]