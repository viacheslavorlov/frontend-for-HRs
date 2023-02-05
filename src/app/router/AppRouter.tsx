import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/router/routes";


export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(route =>
                <Route key={route.path} path={route.path} element={route.element}/>)}
        </Routes>
    );
};


