import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'wigets/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');
    if (!id) {
        return <Text text={t('Профиль не найден!')} />;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>

    );
});

export default ProfilePage;
