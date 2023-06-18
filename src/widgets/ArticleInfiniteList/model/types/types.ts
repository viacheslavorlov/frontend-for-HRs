import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sortOrder';

export interface ArticlesPageSchema extends EntityState<Article> {
    error?: string | undefined;
    isLoading?: boolean;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    // for single initiation
    _inited: boolean;
}
