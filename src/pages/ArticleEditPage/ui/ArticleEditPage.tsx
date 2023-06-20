import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { CreateNewArticleForm, newArticleReducer } from '@/features/CreateNewArticle';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicLoaders';
import { Page } from '@/shared/ui/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const reducers: ReducersList = {
    newArticle: newArticleReducer,
};

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const params = useParams();
    const user = useSelector(getUserAuthData);

    if ((!params || !params.id) && user?.id) {
        return (
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                <DynamicModuleLoader reducers={reducers}>
                    <CreateNewArticleForm userId={user.id} />
                </DynamicModuleLoader>
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
