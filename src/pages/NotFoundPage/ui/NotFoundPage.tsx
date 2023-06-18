import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page data-testid="NotFoundPage" className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});

export default NotFoundPage;
