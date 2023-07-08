import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Select, SelectOption } from '@/shared/ui/Select';
import { Text } from '@/shared/ui/Text';
import { newArticleActions } from '../../model/slice/newArticleSlice';

interface ArticleBlockFormProps {
    className?: string;
}

const articleBlocTypeOptions: SelectOption<ArticleBlockType>[] = [
    {
        value: ArticleBlockType.TEXT,
        content: 'Текст',
    },
    {
        value: ArticleBlockType.CODE,
        content: 'Код',
    },
    {
        value: ArticleBlockType.IMAGE,
        content: 'Изображение',
    },
];

export const ArticleBlockForm = memo((props: ArticleBlockFormProps) => {
    const { className } = props;
    const { t } = useTranslation('newArticle');
    const dispatch = useAppDispatch();
    const [blockType, setBlockType] = useState<ArticleBlockType>(ArticleBlockType.TEXT);
    const [block, setBlock] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const onSetArticleBlockType = useCallback((value: ArticleBlockType) => {
        setBlockType(value);
    }, []);
    const onSetTextBlock = useCallback((str: string) => {
        setBlock(str);
    }, []);

    const onSetTitle = (str: string) => {
        setTitle(str);
    };

    const onSetArticleBlock = (block: ArticleBlock) => {
        dispatch(newArticleActions.setArticleBlock(block));
    };

    const contentCreator = () => {
        switch (blockType) {
            case ArticleBlockType.TEXT:
                return (
                    <>
                        <Input
                            value={title}
                            placeholder={t('Введите заголовок блока статьи')}
                            onChange={onSetTitle}
                        />
                        <Input
                            placeholder={t('Введите текст блока статьи')}
                            value={block}
                            onChange={onSetTextBlock}
                        />
                        <Button
                            onClick={() =>
                                onSetArticleBlock({
                                    id: Date.now().toString(),
                                    title,
                                    paragraphs: [block],
                                    type: blockType,
                                })
                            }>
                            {t('Создать текстовый блок')}
                        </Button>
                    </>
                );
            case ArticleBlockType.CODE:
                return (
                    <>
                        <Input
                            placeholder={t('Введите текст/код блока статьи')}
                            value={block}
                            onChange={onSetTextBlock}
                        />
                        <Button
                            onClick={() =>
                                onSetArticleBlock({
                                    id: Date.now().toString(),
                                    code: block,
                                    type: blockType,
                                })
                            }>
                            {t('Создать блок c кодом')}
                        </Button>
                    </>
                );
            case ArticleBlockType.IMAGE:
                return (
                    <>
                        <Input
                            placeholder={t('Введите url-адрес картинки')}
                            value={block}
                            onChange={onSetTextBlock}
                        />
                        <Input
                            placeholder={t('Введите подпись к картинке')}
                            value={title}
                            onChange={onSetTitle}
                        />
                        <Button
                            onClick={() =>
                                onSetArticleBlock({
                                    id: Date.now().toString(),
                                    src: block,
                                    title,
                                    type: blockType,
                                })
                            }>
                            {t('Создать блок c изображением')}
                        </Button>
                    </>
                );
            default:
                return null;
        }
    };

    const content = contentCreator();

    return (
        <div className={classNames('', {}, [className])}>
            <Text title={t('Выберите тип блока статьи')} />
            <Select options={articleBlocTypeOptions} onChange={onSetArticleBlockType} />
            {content}
        </div>
    );
});
