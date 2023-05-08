import {
    createContext, ReactNode, useRef, useState, useEffect, useMemo, useContext,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextInterface {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}
export const AnimationContext = createContext<AnimationContextInterface>({});

interface AnimationProviderProps {
    children: ReactNode;
}

const getAsyncAnimationsModules = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export function AnimationProvider({ children }: AnimationProviderProps) {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationsModules()
            .then(([String, Gesture]) => {
                GestureRef.current = Gesture;
                SpringRef.current = String;
                setIsLoaded(true);
            });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);
    return (
        <AnimationContext.Provider
            value={value}
        >
            {children}
        </AnimationContext.Provider>
    );
}

export const useAnimationLybrarys = () => useContext(AnimationContext) as Required<AnimationContextInterface>;
