import { FC, lazy, Suspense } from 'react';
import { ArticleRatingProps } from '@/features/ArticleRating/ui/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingLazy = lazy<FC<ArticleRatingProps>>(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
