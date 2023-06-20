import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { CheckboxGroup, OptionsCheckbox } from '@/shared/ui/CheckboxGroup/ui/CheckboxGroup';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text';
import {
    getNewArticleBlocks,
    getNewArticleCreatedAt,
    getNewArticleImg,
    getNewArticleSubtitle,
    getNewArticleTitle,
} from '../../model/selectors/newArticleSelectors';
import { postArticle } from '../../model/service/postArticle';
import { newArticleActions } from '../../model/slice/newArticleSlice';
import { ArticleBlockForm } from '../ArticleBlockForm/ArticleBlockForm';
import cls from './CreateNewArticleForm.module.scss';

const checkboxOptions: OptionsCheckbox<ArticleType>[] = [
    {
        value: ArticleType.IT,
        label: 'IT',
    },
    {
        value: ArticleType.SCIENCE,
        label: 'SCIENCE',
    },
    {
        value: ArticleType.ECONOMICS,
        label: 'ECONOMICS',
    },
];

interface CreateNewArticleFormProps {
    className?: string;
    userId: string;
}

export const CreateNewArticleForm = memo(({ userId, className }: CreateNewArticleFormProps) => {
    const { t } = useTranslation('newArticle');
    const dispatch = useAppDispatch();
    const [inited, setInited] = useState(false);
    const title = useSelector(getNewArticleTitle);
    const subtitle = useSelector(getNewArticleSubtitle);
    const image = useSelector(getNewArticleImg);
    const blocks = useSelector(getNewArticleBlocks);
    const createdAt = useSelector(getNewArticleCreatedAt)?.split('.').reverse().join('-');

    const onInputTitle = useCallback(
        (value: string) => {
            dispatch(newArticleActions.setArticleTitle(value));
            if (!inited) {
                dispatch(newArticleActions.setArticleUserId(userId));
                setInited(true);
            }
        },
        [dispatch, inited, userId],
    );

    const onInputSubtitle = useCallback(
        (value: string) => {
            dispatch(newArticleActions.setArticleSubtitle(value));
        },
        [dispatch],
    );

    const onInputImg = useCallback(
        (value: string) => {
            dispatch(newArticleActions.setArticleImg(value));
        },
        [dispatch],
    );

    const onInputDate = useCallback(
        (value: string) => {
            const formatedDate = value.split('-').reverse().join('.');
            dispatch(newArticleActions.setArticleCreatedAt(formatedDate));
        },
        [dispatch],
    );

    const onInputType = useCallback(
        (values: ArticleType[]) => {
            dispatch(newArticleActions.setArticleType(values));
        },
        [dispatch],
    );

    const onSendArticle = useCallback(() => {
        dispatch(postArticle());
    }, [dispatch]);

    return (
        <VStack gap="8" className={classNames(cls.CreateNewArticleForm, {}, [className])}>
            <Text
                align={TextAlign.CENTER}
                title={t('Заполните необходимые поля для создания статьи')}
            />
            <Text text={`${t('Введите название статьи')}: `} />
            <Input className={cls.input} autofocused value={title} onChange={onInputTitle} />
            <Text text={`${t('Введите краткое описание статьи')}: `} />
            <Input className={cls.input} value={subtitle} onChange={onInputSubtitle} />
            <Text text={`${t('Введите адрес ссылки на статью')}: `} />
            <Input className={cls.input} value={image} onChange={onInputImg} />
            <Text text={`${t('Введите дату создания статьи')}: `} />
            <Input className={cls.input} type="date" value={createdAt} onChange={onInputDate} />
            <Text text={`${t('Выберите тип статьи')}: `} />
            <CheckboxGroup<ArticleType> options={checkboxOptions} onChange={onInputType} />
            <ArticleBlockForm />
            <Button onClick={onSendArticle} theme={ButtonTheme.OUTLINE}>
                {t('Отправить')}
            </Button>
        </VStack>
    );
});
