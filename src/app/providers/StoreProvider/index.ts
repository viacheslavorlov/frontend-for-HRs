import { AppDispatch } from './config/typedAppDispatch';
import { createReduxStore } from './config/store';

export { StoreProvider } from './ui/StoreProvider';
export type { StateSchema, ThunkConfig } from './config/StateSchema';

export type { AppDispatch };
export { createReduxStore };
export type { ReduxStoreWithManager } from './config/reducerManager';
export type { StateSchemaKey } from './config/reducerManager';
