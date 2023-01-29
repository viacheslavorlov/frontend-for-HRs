import {Suspense} from 'react';
import '../../index..scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/about-page/AboutPage.async";
import {MainPageAsync} from "../pages/main-page/MainPage.async";

const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <Suspense fallback={<h1> Loading</h1>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
