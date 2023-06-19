import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../type/addCommentFormSchema';

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined,
};

const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(sendComment.rejected, (state, action) => {
    //             state.error = action.payload;
    //         });
    // },
});

export const { reducer: addCommentFormReducer, actions: addCommentFormActions } =
    addCommentFormSlice;
