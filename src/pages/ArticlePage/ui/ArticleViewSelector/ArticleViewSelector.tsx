import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import Small from 'shared/assets/SmallCards.svg';
import Big from 'shared/assets/BigCards.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from 'entities/Article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorPrors {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: Small,
    },
    {
        view: ArticleView.BIG,
        icon: Big,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorPrors) => {
    const {
        className,
        onViewClick,
        view,
    } = props;

    const onCLick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onCLick(viewType.view)}
                    className={cls.btn}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(cls.icon, { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}

        </div>
    );
});
