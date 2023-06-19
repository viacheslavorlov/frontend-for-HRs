import { Article } from '@/entities/Article';

export interface NewArticleSliceType {
    newArticle: Article;
    error: string | undefined;
    isLoading: boolean;
}
