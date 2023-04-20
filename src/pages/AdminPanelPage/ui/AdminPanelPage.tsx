import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    return (

        <div className={classNames(cls.AdminPanelPage, {}, [className])}>
            {
                /* eslint-disable-next-line i18next/no-literal-string */
            }
            Панель администратора
        </div>
    );
});
export default AdminPanelPage;
