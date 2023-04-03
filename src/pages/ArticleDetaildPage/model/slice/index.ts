import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages';
import { articleCommentReducer } from 'pages/ArticleDetaildPage/model/slice/articleDetaildCommentSlice';
import {
    articleDetailsPageRecomendationReducer,
} from 'pages/ArticleDetaildPage/model/slice/articleDetailsPageRecomendation';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleCommentReducer,
    recommendations: articleDetailsPageRecomendationReducer,
});
