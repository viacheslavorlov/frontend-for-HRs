import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationProps) => {
    const {
        className,
    } = props;
    const { data, isError, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
        refetchOnMountOrArgChange: true,
    });
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    if (isError) {
        return (
            <VStack className={classNames(cls.NotificationList, {}, [className])}>
                <Text text={t('Ошибка загрузки уведомлений')} />
            </VStack>
        );
    }

    return (
        <VStack className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
