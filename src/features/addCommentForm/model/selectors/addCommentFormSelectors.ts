// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';

export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
