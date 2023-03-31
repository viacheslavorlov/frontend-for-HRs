import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { AppDispatch } from 'app/providers/StoreProvider';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailedCommentSchema } from 'pages';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ui/ArticlePage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    // Асинхронные редьюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailedComment?: ArticleDetailedCommentSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers?: () => MountedReducers;

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    dispatch: AppDispatch;
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}
