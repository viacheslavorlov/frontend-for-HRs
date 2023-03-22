import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetails';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentSlice';
import { articleCommentReducer } from 'pages/ui/ArticleDetaildPage/CommentsEntitie/slice/articleDetaildCommentSlice';

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailedComment: articleCommentReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
