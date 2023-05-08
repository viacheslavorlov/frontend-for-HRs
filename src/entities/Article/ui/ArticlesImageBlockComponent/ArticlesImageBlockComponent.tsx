import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/type';
import cls from './ArticlesImageBlockComponent.module.scss';

interface ArticlesImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticlesImageBlockComponent = memo(({ className, block }: ArticlesImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    );
});
