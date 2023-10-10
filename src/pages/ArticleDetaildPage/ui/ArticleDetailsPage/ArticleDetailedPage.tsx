import { ArticleDetails } from '@/entities/Article';
import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecomendationList } from '@/features/ArticleRecomendationList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature';
import { Page } from '@/shared/ui/Page';
import { PageError } from '@/shared/ui/PageError';
import { VStack } from '@/shared/ui/Stack';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
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

    if (__PROJECT === 'storybook') {
        id = '1';
    }

    if (!id) {
        return <PageError />;
    }

    return (
        <Page
            data-testid="ArticleDetailedPage"
            className={classNames(cls.ArticleDetaildPage, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id || '1'} />
                    {/* Обнаружился Баг */}
                    <ToggleFeature
                        feature={'isCounterEnabled'}
                        on={<Counter />}
                        off={<ArticleRating articleId={id} />}
                    />
                    <ArticleRecomendationList className={cls.recommendations} />
                    <ArticleDetailsComments id={id || '1'} />
                </VStack>
            </DynamicModuleLoader>
        </Page>
    );
};

export default memo(ArticleDetailedPage);
