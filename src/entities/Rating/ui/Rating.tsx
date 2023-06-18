import { BrowserView, MobileView } from 'react-device-detect';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingProps {
    className?: string;
    title?: string;
    feedBackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback: string) => void;
    rate?: number;
}

export const Rating = memo((props: RatingProps) => {
    const { className, title, feedBackTitle, onAccept, onCancel, hasFeedback, rate = 0 } = props;
    const { t } = useTranslation();

    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else if (onAccept) {
                onAccept(selectedStarsCount, feedback);
            }
        },
        [feedback, hasFeedback, onAccept],
    );

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
            <Input
                data-testid="RatingModalInput"
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
            <HStack justify="between" max>
                <Button data-testid="RatingModalClose" onClick={onCancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Отменить')}
                </Button>
                <Button data-testid="RatingModalSend" onClick={onAcceptHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={className}>
            <VStack align="center" max gap="8">
                <Text
                    data-testid="ArticleRating"
                    text={starsCount ? feedBackTitle || t('Спасибо за оценку!') : title ?? t('Оставьте свой отзыв!')}
                />
                <StarRating onSelect={onSelectStars} selectedStars={rate} />
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
