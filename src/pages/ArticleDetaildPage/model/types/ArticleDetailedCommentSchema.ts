import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comments';

export interface ArticleDetailedCommentSchema extends EntityState<CommentType>{
    isLoading?: boolean;
    error?: string;
}
