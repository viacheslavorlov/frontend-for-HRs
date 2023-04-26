import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'wigets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (

        <Page className={classNames('', {}, [className])}>
            <Text title={t('Панель администратора')} />
        </Page>
    );
});
export default AdminPanelPage;