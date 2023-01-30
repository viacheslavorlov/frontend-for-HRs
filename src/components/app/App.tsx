import {Suspense} from 'react';
import '../../styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../../pages/about-page/AboutPage.async";
import {MainPageAsync} from "../../pages/main-page/MainPage.async";
import {useTheme} from "../../theme/useThem";
import {classNames} from "../../helpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>сменить тему</button>
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
