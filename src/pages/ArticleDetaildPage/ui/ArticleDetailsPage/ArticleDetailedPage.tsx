import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/shared/ui/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecomendationList } from '@/features/ArticleRecomendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailedPage.module.scss';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetaildPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailedPage: articleDetailsPageReducer,
};

const ArticleDetailedPage = ({ className }: ArticleDetaildPageProps) => {
    let { id } = useParams<{ id: string }>();

    if (__PROJECT === 'storybook') {
        id = '1';
    }

    if (!id) {
        return null;
    }

    return (
        <Page data-testid="ArticleDetailedPage" className={classNames(cls.ArticleDetaildPage, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id || '1'} />
                    <ArticleRating articleId={id || '1'} />
                    <ArticleRecomendationList className={cls.recommendations} />
                    <ArticleDetailsComments id={id || '1'} />
                </VStack>
            </DynamicModuleLoader>
        </Page>
    );
};

export default memo(ArticleDetailedPage);
