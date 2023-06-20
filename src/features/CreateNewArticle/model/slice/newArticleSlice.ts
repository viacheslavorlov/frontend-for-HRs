import { createSlice } from '@reduxjs/toolkit';
import { NewArticleSliceType } from '../type/newArticleSliceType';
import { postArticle } from '../service/postArticle';

const initialState: NewArticleSliceType = {
    error: undefined,
    isLoading: false,
    newArticle: {
        type: [],
        title: '',
        img: '',
        createdAt: '',
        id: '',
        user: {
            id: '',
            username: '',
        },
        views: 0,
        subtitle: '',
        blocks: [],
    },
};

const newArticleSlice = createSlice({
    name: 'newArticle',
    initialState,
    reducers: {
        setArticleTitle: (state, action) => {
            state.newArticle.title = action.payload;
        },
        setArticleSubtitle: (state, action) => {
            state.newArticle.subtitle = action.payload;
        },
        setArticleType: (state, action) => {
            state.newArticle.type = action.payload;
        },
        setArticleCreatedAt: (state, action) => {
            state.newArticle.createdAt = action.payload;
        },
        setArticleBlock: (state, action) => {
            state.newArticle.blocks.push(action.payload);
        },
        setArticleUser: (state, action) => {
            state.newArticle.user = action.payload;
        },
        setArticleImg: (state, action) => {
            state.newArticle.img = action.payload;
        },
        deleteArticleType: (state, action) => {
            state.newArticle.type = state.newArticle.type.filter((item) => item !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postArticle.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(postArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
            })
            .addCase(postArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: newArticleActions, reducer: newArticleReducer } = newArticleSlice;
