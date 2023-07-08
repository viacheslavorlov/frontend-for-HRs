import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecomendationList } from '@/features/ArticleRecomendationList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlags } from '@/shared/lib/features';
import { Page } from '@/shared/ui/Page';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailedPage.module.scss';

interface ArticleDetaildPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailedPage: articleDetailsPageReducer,
};

const ArticleDetailedPage = ({ className }: ArticleDetaildPageProps) => {
    let { id } = useParams<{ id: string }>();
    const isCounterEnabled = getFeatureFlags('isCounterEnabled');
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');
    if (__PROJECT === 'storybook') {
        id = '1';
    }

    if (!id) {
        return null;
    }

    return (
        <Page
            data-testid="ArticleDetailedPage"
            className={classNames(cls.ArticleDetaildPage, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <VStack max gap="16">
                    <>
                        <ArticleDetailsPageHeader />
                        <ArticleDetails id={id || '1'} />
                        {/* Обнаружился Баг */}
                        {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                        {isCounterEnabled && <Counter />}
                        <ArticleRecomendationList className={cls.recommendations} />
                        <ArticleDetailsComments id={id || '1'} />
                    </>
                </VStack>
            </DynamicModuleLoader>
        </Page>
    );
};

export default memo(ArticleDetailedPage);
