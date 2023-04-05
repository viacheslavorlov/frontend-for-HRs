import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'wigets/Page/Page';

interface AboutPageProps {
    className?: string
}

const AboutPage = memo((props: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <Page className={props?.className}>
            {t('О нас!')}
        </Page>
    );
});

export default AboutPage;
