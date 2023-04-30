import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { PageError } from 'wigets/PageError/PageError';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useArticleRecommendationsList } from '../model/api/recommmendationsApi';
import cls from './ArticleRecomendationList.module.scss';

interface ArticleRecomendationListProps {
    className?: string;
}

export const ArticleRecomendationList = memo((props: ArticleRecomendationListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const { data: recommendations, isLoading, error } = useArticleRecommendationsList(4);

    if (error) {
        return <PageError />;
    }

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text title={t('Рекомендации')} />
            {!isLoading && recommendations && (
                <ArticleList
                    className={cls.ArticleRecommendationList}
                    target="_blank"
                    articles={recommendations}
                    view={ArticleView.SMALL}
                    isLoading={isLoading}
                    onLoadNext={undefined}
                />
            )}
        </VStack>
    );
});
