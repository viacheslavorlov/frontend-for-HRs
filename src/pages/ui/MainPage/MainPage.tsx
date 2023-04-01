import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'wigets/Page/Page';

interface MainPageProps {
    className?: string
}

const MainPage = memo((props: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <Page className={props.className}>
            <BugButton />
            {t('Главная')}
        </Page>
    );
});

export default MainPage;
