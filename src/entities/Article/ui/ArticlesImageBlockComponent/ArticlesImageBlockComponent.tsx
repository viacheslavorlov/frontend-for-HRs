import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesImageBlockComponent.module.scss';

interface ArticlesImageBlockComponentProps {
    className?: string
}

export const ArticlesImageBlockComponent = ({ className }: ArticlesImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesImageBlockComponent, {}, [className])}>
            {() => 'ArticlesImageBlockComponent'}
        </div>
    );
};
