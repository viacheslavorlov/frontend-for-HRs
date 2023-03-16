import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { articleDetailsReducer } from '../../model/slice/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
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

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;
    if (loading) {
        content = (
            <div>
                <Skeleton width={200} height={200} border="50%" className={cls.center} />
                <Skeleton width="50%" height={50} className={cls.center} />
                <Skeleton width="100%" height={50} />
                <Skeleton width="100%" height={150} />
                <Skeleton width="100%" height={250} />
                <Skeleton width="100%" height={150} />
            </div>

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
        content = <div>{() => 'Article loaded'}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>

        </DynamicModuleLoader>

    );
});
