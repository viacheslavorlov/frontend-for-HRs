import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { HStack } from '@/shared/ui/Stack';
import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { className, onSendComment } = props;
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const reducers: ReducersList = {
        addCommentForm: addCommentFormReducer,
    };
    const onSendHandler = useCallback(() => {
        if (text) {
            onSendComment(text);
            onCommentTextChange('');
        }
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    data-testid="ArticleDetailsCommentInput"
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button data-testid="ArticleDetailsCommentSend" theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});
export default AddCommentForm;
