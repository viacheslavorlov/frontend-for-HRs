import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './ArticlesTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/type';

interface ArticlesTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticlesTextBlockComponent = memo(({ className, block }: ArticlesTextBlockComponentProps) => (
    <div className={classNames(cls.ArticlesTextBlockComponent, {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
));
