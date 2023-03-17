declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV: boolean;
declare const __API_URL: string;
declare const __PROJECT: 'storybook' | 'jest' | 'frontend';

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
