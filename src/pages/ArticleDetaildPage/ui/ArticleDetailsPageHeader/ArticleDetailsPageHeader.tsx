import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'app/router/routeConfig/routes';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetaildPage/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePaths.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePaths.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onBackToList}
                className={cls.backButton}
            >
                {t('Назад к списку статей...')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.editButton}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
