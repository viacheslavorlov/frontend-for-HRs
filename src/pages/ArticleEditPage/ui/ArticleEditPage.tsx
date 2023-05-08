import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const params = useParams();
    if (!params || !params.id) {
        return (
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                {t('Создать статью')}
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {t('Редактировать статью')}
        </Page>
    );
});

export default ArticleEditPage;
