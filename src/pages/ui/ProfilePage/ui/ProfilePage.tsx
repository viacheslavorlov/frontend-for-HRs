import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/country';
import {
    getProfileValidateErrors,
} from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfile/validateProfile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/Page/Page';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const profileForm = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const { id } = useParams<{ id: string }>();
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

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ last: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        if (!Number.isNaN(Number(value))) {
            dispatch(profileActions.updateProfile({ age: Number(value) }));
        }
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCounty = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfileHeader onCancelEdit={onCancelEdit} />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text key={err} variant={TextVariant.ERROR} text={validateErrorTranslates[err]} />
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
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
