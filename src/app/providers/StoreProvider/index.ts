import { AppDispatch, createReduxStore } from './config/store';

export { StoreProvider } from './ui/StoreProvider';
export type {
    ReduxStoreWithManager,
    StateSchema,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';

export type {
    AppDispatch,
};
export {
    createReduxStore,
};
