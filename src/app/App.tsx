import {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router/AppRouter";
import {Navbar} from "wigets/Navbar";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>сменить тему</button>
            <Navbar />
            <Suspense fallback={<h1> Loading</h1>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;
