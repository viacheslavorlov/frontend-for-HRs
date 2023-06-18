import { ArticleDetailedCommentSchema } from './ArticleDetailedCommentSchema';
import { ArticleDetailsPageRecommendationSchema } from './ArticleDetailsPageRecomendationSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailedCommentSchema;
    recommendations: ArticleDetailsPageRecommendationSchema;
}
