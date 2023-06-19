import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestorationSchema } from '../types/scrollRextorationShema';

const initialState: ScrollRestorationSchema = {
    scroll: {},
};

export const ScrollRestorationSliceSlice = createSlice({
    name: 'scrollRestorationSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetch.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetch.fulfilled, (state, action: PayloadAction<>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetch.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { reducer: scrollRestorationSliceReducer, actions: scrollRestorationSliceActions } =
    ScrollRestorationSliceSlice;
