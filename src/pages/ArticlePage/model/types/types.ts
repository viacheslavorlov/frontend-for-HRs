import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/sortOrder';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/type';

export interface ArticlesPageSchema extends EntityState<Article>{
    error?: string | undefined;
    isLoading?: boolean;

    // pagination
    page: number
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
