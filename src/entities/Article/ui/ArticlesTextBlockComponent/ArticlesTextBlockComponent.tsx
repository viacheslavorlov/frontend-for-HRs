import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesTextBlockComponent.module.scss';

interface ArticlesTextBlockComponentProps {
    className?: string
}

export const ArticlesTextBlockComponent = ({ className }: ArticlesTextBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesTextBlockComponent, {}, [className])}>
            {() => 'Articles Text Block Component'}
        </div>
    );
};
