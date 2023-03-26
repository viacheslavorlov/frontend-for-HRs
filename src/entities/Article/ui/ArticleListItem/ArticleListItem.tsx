import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from 'entities/Article/model/types/type';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticlesTextBlockComponent } from '../ArticlesTextBlockComponent/ArticlesTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import Eye from '../../assets/Eye.svg';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    const [isHover, bindHover] = useHover();
    console.log(isHover);

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
                        <Button
                            theme={ButtonTheme.CLEAR}
                            className={cls.btn}
                        >
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
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
    );
});
