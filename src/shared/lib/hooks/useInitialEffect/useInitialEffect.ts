import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT !== 'storybook' && __PROJECT !== 'jest') {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
