import {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages";
import {AboutPage} from "pages";
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>сменить тему</button>
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <Suspense fallback={<h1> Loading</h1>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
