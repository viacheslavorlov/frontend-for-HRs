import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { CreateNewArticleForm, newArticleReducer } from '@/features/CreateNewArticle';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicLoaders';

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

    if (!params || !params.id) {
        return (
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                <DynamicModuleLoader reducers={reducers}>
                    <CreateNewArticleForm />
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
