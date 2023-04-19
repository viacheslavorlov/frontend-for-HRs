import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'wigets/Page/Page';
import { Text, TextVariant } from 'shared/ui/Text/Text';

interface MainPageProps {
    className?: string
}

const MainPage = memo((props: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <Page className={props.className}>
            <Text
                title={t('Главная')}
                text={t('Чтобы войти и посмотреть все возможности'
                    + ' данного сайта нажмите на кнопку "Войти" в правом верхнем углу экрана')}
                variant={TextVariant.PRIMARY}
            />
            <Text
                text={t('Используйте логин: admin')}
                variant={TextVariant.PRIMARY}
            />
            <Text
                text={t('Используйте пароль: 123')}
                variant={TextVariant.PRIMARY}
            />
            <Text
                text={t('PS: Статьи, естественно, фейковые))) '
                    + 'изменения в профиле не работают из за ограничений фейкового беленда на сервере(((')}
                variant={TextVariant.PRIMARY}
            />

            <BugButton />

        </Page>
    );
});

export default MainPage;