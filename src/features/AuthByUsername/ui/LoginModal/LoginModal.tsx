import { memo, Suspense } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => (
    <>
        <BrowserView>
            <Modal
                className={classNames('', {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
                lazy
            >
                <Suspense fallback={<PageLoader />}>
                    <LoginFormAsync onSuccess={onClose} />
                </Suspense>
            </Modal>
        </BrowserView>
        <MobileView>
            <Drawer
                className={classNames('', {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
                lazy
            >
                <Suspense fallback={<PageLoader />}>
                    <LoginFormAsync onSuccess={onClose} />
                </Suspense>
            </Drawer>
        </MobileView>
    </>
));
