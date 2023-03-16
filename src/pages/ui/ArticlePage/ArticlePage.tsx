import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetailedPage } from 'pages';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            <ArticleDetailedPage />
        </div>
    );
};

export default memo(ArticlePage);
