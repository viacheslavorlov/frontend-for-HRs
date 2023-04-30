import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'app/router/routeConfig/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConst';
import {
    Article, ArticleTextBlock,
} from '../../model/types/type';
import { ArticlesTextBlockComponent } from '../ArticlesTextBlockComponent/ArticlesTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import Eye from '../../assets/Eye.svg';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        target,
        view = ArticleView.BIG,
    } = props;
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePaths.article_details + article.id);
    }, [article, navigate]);

    // * useHover() hook can be used instead of
    const [isHover, bindHover] = useHover();
    // console.log(isHover);

    const types = <Text text={article?.type.join(', ')} className={cls.type} />;
    const views = (
        <>
            <Text text={String(article?.views)} className={cls.views} />
            <Icon Svg={Eye} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article?.user.avatar} />
                        <Text text={article?.user.username} className={cls.username} />
                        <Text text={article?.createdAt} className={cls.date} />
                    </div>
                    <Text title={article?.title} className={cls.title} />
                    {types}

                    <img className={cls.img} src={article?.img} alt={article?.title} />
                    {textBlock && <ArticlesTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePaths.article_details + article.id}>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.btn}
                                onClick={onOpenArticle}
                            >
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePaths.article_details + article.id}
        >
            <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card} onClick={onOpenArticle}>
                    <div className={cls.imageWrapper}>
                        <img src={article?.img} alt={article?.title} className={cls.img} />
                        <Text text={article?.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article?.title} className={cls.title} />
                </Card>
            </div>
        </AppLink>
    );
});
