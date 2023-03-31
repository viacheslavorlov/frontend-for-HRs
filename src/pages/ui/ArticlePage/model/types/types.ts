import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    error?: string | undefined;
    isLoading?: boolean;
    view: ArticleView;
    // pagination
    page: number
    limit?: number;
    hasMore: boolean;
    // for single initiation
    _inited: boolean;
}
