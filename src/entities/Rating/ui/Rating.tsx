import { BrowserView, MobileView } from 'react-device-detect';
import {
    ChangeEvent, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import cls from './Rating.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingProps {
    className?: string;
    title?: string;
    feedBackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback: string) => void;
}

export const Rating = memo((props: RatingProps) => {
    const {
        className, title, feedBackTitle, onAccept, onCancel, hasFeedback,
    } = props;
    const { t } = useTranslation();

    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else if (onAccept) {
            onAccept(selectedStarsCount, feedback);
        }
    }, [feedback, hasFeedback, onAccept]);

    const onAcceptHandler = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [feedback, onAccept, starsCount]);

    const onCancelHandler = useCallback(() => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack gap="32" max>
            <Text text={feedBackTitle} />
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
            <HStack justify="between" max>
                <Button onClick={onCancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Отменить')}
                </Button>
                <Button onClick={onAcceptHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames(cls.Rating, {}, [className])}>
            <VStack align="center" max gap="8">
                <Text text={title} />
                <StarRating onSelect={onSelectStars} />
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        {modalContent}
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} lazy>
                        {modalContent}
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
});
