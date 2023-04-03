import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleCommentReducer } from './articleDetaildCommentSlice';
import {
    articleDetailsPageRecomendationReducer,
} from './articleDetailsPageRecomendation';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleCommentReducer,
    recommendations: articleDetailsPageRecomendationReducer,
});
