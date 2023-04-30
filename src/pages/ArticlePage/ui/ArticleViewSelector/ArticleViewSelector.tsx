import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../../../entities/Article/model/consts/articleConst';
import { viewTypes } from './const/viewTypes';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorPrors {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

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
