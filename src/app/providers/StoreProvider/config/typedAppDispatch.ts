import { createReduxStore } from '@/app/providers/StoreProvider';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
