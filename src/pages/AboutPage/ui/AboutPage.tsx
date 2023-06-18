import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page';
import { Text, TextVariant } from '@/shared/ui/Text';

interface AboutPageProps {
    className?: string;
}

const AboutPage = memo((props: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage" className={props?.className}>
            <Text
                title={t('О нас!')}
                text={t(
                    'Чтобы войти и посмотреть все возможности ' +
                        'данного сайта нажмите на кнопку "Войти" в правом верхнем углу экрана',
                )}
                variant={TextVariant.PRIMARY}
            />
            <Text text={t('Используйте логин: admin')} variant={TextVariant.PRIMARY} />
            <Text text={t('Используйте пароль: 123')} variant={TextVariant.PRIMARY} />
        </Page>
    );
});

export default AboutPage;
