import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { userActions, getUserInited } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { useTheme } from './providers/TemeProvider';
import { AppRouter } from './router';

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
                    {inited && <Suspense fallback={<PageLoader />}><AppRouter /></Suspense>}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
