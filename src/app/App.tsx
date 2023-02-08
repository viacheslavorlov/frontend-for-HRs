import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/TemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/router/AppRouter';
import { Navbar } from 'wigets/Navbar';
import { Sidebar } from 'wigets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
