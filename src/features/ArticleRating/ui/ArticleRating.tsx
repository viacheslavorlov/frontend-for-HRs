import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Rating } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
    const [rateArticle] = useRateArticle();

    const rating = data?.[0];
    const feedbackTitle = data?.[0]?.feedback;

    const onHandelRating = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticle({
                    articleId,
                    userId: userData?.id ?? '',
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticle, userData?.id],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            onHandelRating(starsCount);
        },
        [onHandelRating],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            onHandelRating(starsCount, feedback);
        },
        [onHandelRating],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <Rating
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью.')}
            feedBackTitle={feedbackTitle}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating;
