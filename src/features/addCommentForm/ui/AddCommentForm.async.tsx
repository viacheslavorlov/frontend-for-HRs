import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm';

export const AddCommentFormAsync = lazy <FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
