import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { memo } from 'react';
import LoadingSpinner from 'shared/ui/LoadingSpinner/LoadingSpinner';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/country';
import { CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { ProfileType } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: ProfileType;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCounty?: (value?: Country) => void;
    readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCounty,
        readonly,
        onChangeAge,
        onChangeCity,
    } = props;

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <LoadingSpinner />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    variant={TextVariant.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="16" className={classNames(cls.ProfileCard, mods, [className])}>

            {data?.avatar && (
                <HStack align="center" justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt={data?.username} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                value={data?.last}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
            />

            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                readonly={readonly}
                onChange={onChangeCurrency}
            />
            <CountrySelect
                value={data?.country}
                readonly={readonly}
                onChange={onChangeCounty}
            />
        </VStack>
    );
});
