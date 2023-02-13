import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string
}

const AboutPage = (props: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <div className={props?.className}>
            {t('О нас!')}
        </div>
    );
};

export default AboutPage;
