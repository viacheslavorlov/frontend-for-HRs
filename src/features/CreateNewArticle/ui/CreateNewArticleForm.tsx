import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from '@/shared/ui/Text';
import cls from './CreateNewArticleForm.module.scss';
import {
    getNewArticleBlocks,
    getNewArticleCreatedAt,
    getNewArticleImg,
    getNewArticleSubtitle,
    getNewArticleTitle,
    getNewArticleType,
} from '../model/selectors/newArticleSelectors';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { newArticleActions } from '../model/slice/newArticleSlice';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleType } from '@/entities/Article';

export const CreateNewArticleForm = () => {
    const { t } = useTranslation('newArticle');
    const dispatch = useAppDispatch();
    const title = useSelector(getNewArticleTitle);
    const subtitle = useSelector(getNewArticleSubtitle);
    const image = useSelector(getNewArticleImg);
    const blocks = useSelector(getNewArticleBlocks);
    const createdAt = useSelector(getNewArticleCreatedAt)
        ?.split('.')
        .reverse()
        .join('-');
    const articleType = useSelector(getNewArticleType);

    const onInputTitle = (value: string) => {
        dispatch(newArticleActions.setArticleTitle(value));
    };

    const onInputSubtitle = (value: string) => {
        dispatch(newArticleActions.setArticleSubtitle(value));
    };

    const onInputImg = (value: string) => {
        dispatch(newArticleActions.setArticleImg(value));
    };
    const onInputDate = (value: string) => {
        const formatedDate = value.split('-').reverse().join('.');
        dispatch(newArticleActions.setArticleCreatedAt(formatedDate));
    };

    const onInputType = (e: MouseEvent) => {
        if (e?.target?.checked) {
            dispatch(newArticleActions.setArticleType(e?.target?.value));
        }
    };

    return (
        <VStack gap='8' className={cls.CreateNewArticleForm}>
            <Text align={TextAlign.CENTER} title={t('Заполните необходимые поля для создания статьи')} />
            <Text text={`${t('Введите название статьи')}: `} />
            <Input className={cls.input} autofocused value={title} onChange={onInputTitle} />
            <Text text={`${t('Введите краткое описание статьи')}: `} />
            <Input className={cls.input} value={subtitle} onChange={onInputSubtitle} />
            <Text text={`${t('Введите адрес ссылки на статью')}: `} />
            <Input className={cls.input} value={image} onChange={onInputImg} />
            <Text text={`${t('Введите дату создания статьи')}: `} />
            <Input className={cls.input} type='date' value={createdAt} onChange={onInputDate} />
            <Text text={`${t('Выберите тип статьи')}: `} />
            <HStack gap='16' className={cls.checkboxGroup}>
                <label className={cls.input} htmlFor='all'>
                    {t('Любой')}
                    <Input onClick={onInputType} type='checkbox' id='all' name='ArticleType' value={ArticleType.ALL} />
                </label>
                <label className={cls.input} htmlFor='it'>
                    {t('ИТ')}
                    <Input onClick={onInputType} type='checkbox' id='it' name='ArticleType' value={ArticleType.IT} />
                </label>
                <label className={cls.input} htmlFor='economics'>
                    {t('Экономика')}
                    <Input onClick={onInputType} type='checkbox' id='economics' name='ArticleType'
                           value={ArticleType.ECONOMICS} />
                </label>
                <label className={cls.input} htmlFor='science'>
                    {t('Наука')}
                    <Input onClick={onInputType} type='checkbox' id='science' name='ArticleType'
                           value={ArticleType.SCIENCE} />
                </label>
            </HStack>
        </VStack>
    );
};


