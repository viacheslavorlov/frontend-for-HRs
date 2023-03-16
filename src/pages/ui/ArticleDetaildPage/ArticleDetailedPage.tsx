import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from 'pages/ui/NotFoundPage';
import cls from './ArticleDetailedPage.module.scss';

interface ArticleDetaildPageProps {
    className?: string
}

const ArticleDetailedPage = ({ className }: ArticleDetaildPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams();

    if (!id) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <div className={classNames(cls.ArticleDetaildPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailedPage);
