import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize, TextVariant } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/articleConst';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticlesImageBlockComponent } from '../ArticlesImageBlockComponent/ArticlesImageBlockComponent';
import { ArticlesTextBlockComponent } from '../ArticlesTextBlockComponent/ArticlesTextBlockComponent';
import { ArticleBlock } from '../../model/types/type';
import { articleDetailsReducer } from '../../model/slice/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelector';
import Eye from '../../assets/Eye.svg';
import Calendar from '../../assets/caledar.svg';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const loading = useSelector(getArticleDetailsIsLoading);
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticlesImageBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticlesTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT !== 'storybook' && id) {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;
    if (loading) {
        content = (
            <VStack max gap="16">
                <Skeleton width={200} height={200} border="50%" className={cls.center} />
                <Skeleton width="50%" height={50} className={cls.center} />
                <Skeleton width="100%" height={50} />
                <Skeleton width="100%" height={150} />
                <Skeleton width="100%" height={250} />
                <Skeleton width="100%" height={150} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                variant={TextVariant.ERROR}
                title={t('Произошла ошибка при загрузке страницы')}
            />
        );
    } else {
        content = (
            <VStack max gap="8">
                <HStack max justify="center">
                    <Avatar size={150} src={data?.img} />
                </HStack>
                <Text
                    data-testid="ArticleDetails"
                    title={data?.title}
                    text={data?.subtitle}
                    className={cls.title}
                    size={TextSize.L}
                />
                <HStack gap="8">
                    <Icon Svg={Eye} />
                    <Text text={String(data?.views)} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={Calendar} />
                    <Text text={data?.createdAt} />
                </HStack>
                <VStack gap="16" max>
                    {data?.blocks.map(renderBlock)}
                </VStack>
            </VStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    );
});
