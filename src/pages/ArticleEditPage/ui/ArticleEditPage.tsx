import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'wigets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? 'Article Edit Page' : 'Create New Article'}
        </Page>
    );
});

export default ArticleEditPage;
