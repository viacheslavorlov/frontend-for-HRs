import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { CommentType, fetchCommentsByArticleId } from '@/entities/Comments';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailedCommentSchema } from '../types/ArticleDetailedCommentSchema';

const commentAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailedPage?.comments || commentAdapter.getInitialState(),
);
const articleCommentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentAdapter.getInitialState<ArticleDetailedCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleCommentReducer, actions: articleCommentActions } = articleCommentSlice;
