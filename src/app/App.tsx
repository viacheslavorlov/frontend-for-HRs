import {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/TemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router/AppRouter";
import {Navbar} from "wigets/Navbar";
import {Sidebar} from "wigets/Sidebar";
import {useTranslation} from "react-i18next";
// import logo from "../wigets/ThemeSwitcher/assets/home.png"




const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            {/*<img src={logo} alt={'asd fa'}/> проверка *.png файлов */}
            <Suspense fallback={<h1> Loading</h1>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
