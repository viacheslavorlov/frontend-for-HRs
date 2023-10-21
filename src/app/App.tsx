import { getUserInited, initAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useThem';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature';
import { MainLayout } from '@/shared/layouts/MainLayout';

function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);
	
	useEffect(() => {
		// @ts-ignore
		dispatch(initAuthData());
	}, [dispatch]);
	
	if (!inited) {
		return (
			<div className={classNames('app', {}, [theme])}>
				<PageLoader />
			</div>
		);
	}
	if (inited) {
		return (
			<ToggleFeature
				feature={'isNewDesign'}
				on={<div className={classNames('app_redesigned', {}, [theme])}>
					<div className='content-page'>
						<Suspense fallback={<PageLoader />}>
							<MainLayout
								header={<Navbar />}
								content={
									<Suspense fallback={<PageLoader />}>
										<AppRouter />
									</Suspense>}
								sidebar={<Sidebar />}
							/>
						</Suspense>
					</div>
				</div>}
				off={<div className={classNames('app', {}, [theme])}>
					<Suspense fallback={<PageLoader />}>
						<Navbar />
						<div className='content-page'>
							<Sidebar />
							{inited && (
								<Suspense fallback={<PageLoader />}>
									<AppRouter />
								</Suspense>
							)}
						</div>
					</Suspense>
				</div>}
			/>
		
		);
	}
}

export default App;
