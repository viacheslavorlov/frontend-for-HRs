// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
