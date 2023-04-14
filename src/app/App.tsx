import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/TemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/router/AppRouter';
import { Navbar } from 'wigets/Navbar';
import { Sidebar } from 'wigets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, getUserInited } from 'entities/User';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <Suspense fallback={PageLoader}><AppRouter /></Suspense>}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
