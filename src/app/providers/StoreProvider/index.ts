import { ReduxStoreWithManager, StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    ReduxStoreWithManager,
    StateSchema,
    StoreProvider,
    createReduxStore,
    AppDispatch,
    ThunkExtraArg,
};
