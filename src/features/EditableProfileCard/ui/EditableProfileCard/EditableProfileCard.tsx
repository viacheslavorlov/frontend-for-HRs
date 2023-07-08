import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextVariant } from '@/shared/ui/Text';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfile/fetchProfile';
import { ValidateProfileError } from '../../model/services/validateProfile/validateProfile';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string | undefined;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {className, id} = props;
    const {t} = useTranslation('profile');
    const profileForm = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const dispatch = useAppDispatch();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.NO_DATA]: t('Данные не получены'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_AVATAR]: t('Некорректный адрес аватара'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Некорректное имя пользователя'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Некорректная валюта'),
        [ValidateProfileError.INCORRECT_CITY]: t('Некорректные данные города проживания'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректное имя или фамилия пользователя '),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректное название страны проживания'),
    };
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({first: value}));
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({last: value}));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            if (!Number.isNaN(Number(value))) {
                dispatch(profileActions.updateProfile({age: Number(value)}));
            }
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({city: value}));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({avatar: value}));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({username: value}));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({currency: value}));
        },
        [dispatch],
    );

    const onChangeCounty = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({country: value}));
        },
        [dispatch],
    );

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="8" className={classNames('', {}, [className])}>
                <ProfileHeader onCancelEdit={onCancelEdit}/>
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            variant={TextVariant.ERROR}
                            text={validateErrorTranslates[err]}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}
                <ProfileCard
                    readonly={readonly}
                    data={profileForm}
                    error={error}
                    isLoading={isLoading}
                    onChangeFirstname={onChangeFirstName}
                    onChangeLastname={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCounty={onChangeCounty}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
