import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/shared/ui/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
