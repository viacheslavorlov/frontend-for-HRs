import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfile,
} from 'features/EditableProfileCard';

interface ProfileHeaderProps {
    className?: string;
    onCancelEdit: () => void;
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
    const { className, onCancelEdit } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileData);
    const authData = useSelector(getUserAuthData);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfile());
    }, [dispatch]);

    const canEdit = profile?.id === authData?.id;

    return (
        <HStack
            className={classNames('', {}, [className])}
            max
            justify="between"
        >
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCard.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        )

                        : (
                            <HStack gap="8" justify="end">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCard.CancelButton"

                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCard.SaveButton"

                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
};
