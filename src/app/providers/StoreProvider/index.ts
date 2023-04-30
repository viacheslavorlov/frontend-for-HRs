import {
    ReduxStoreWithManager,
    StateSchema,
    ThunkConfig,
} from 'app/providers/StoreProvider/config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export type {
    ReduxStoreWithManager,
    StateSchema,
    AppDispatch,
    ThunkConfig,
};
export {
    StoreProvider,
    createReduxStore,
};
