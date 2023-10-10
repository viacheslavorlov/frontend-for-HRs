import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

interface ArticlePageGreetingsProps {
    className?: string;
}

export const ArticlePageGreetings = memo((props: ArticlePageGreetingsProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const { isFirstTimeArticlePageVisit } = useJsonSettings();
    const [isModal, setIsModal] = useState(false);

    const onModalCLose = () => {
        setIsModal(false);
    };

    useEffect(() => {
        if (!isFirstTimeArticlePageVisit) {
            setIsModal(true);
            dispatch(saveJsonSettings({ isFirstTimeArticlePageVisit: true }));
        }
    }, [dispatch, isFirstTimeArticlePageVisit]);

    if (isMobile) {
        return (
            <Drawer isOpen={isModal} onClose={onModalCLose}>
                <Text
                    text={t('Здесь вы можете читать и просматривать статьи.')}
                    title={t('Добро пожаловать на страницу статей!')}
                />
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isModal} onClose={onModalCLose}>
            <Text
                text={t('Здесь вы можете читать и просматривать статьи.')}
                title={t('Добро пожаловать на страницу статей!')}
            />
        </Modal>
    );
});
