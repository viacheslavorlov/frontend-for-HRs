import { createSlice } from '@reduxjs/toolkit';
import { NewArticleSliceType } from '../type/newArticleSliceType';

const initialState: NewArticleSliceType = {
    newArticle: {
        type: [],
        title: '',
        img: '',
        createdAt: '',
        id: '',
        user: {
            id: '',
            avatar: '',
            roles: [],
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
            state.newArticle.type.push(action.payload);
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
        }
    },
});

export const {
    actions: newArticleActions,
    reducer: newArticleReducer,
} = newArticleSlice;