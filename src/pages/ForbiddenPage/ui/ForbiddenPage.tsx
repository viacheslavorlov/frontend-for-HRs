import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'wigets/Page/Page';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            <Text variant={TextVariant.ERROR} title={t('У вас нет правдоступа для просмотра этой страницы')} />
        </Page>
    );
});
