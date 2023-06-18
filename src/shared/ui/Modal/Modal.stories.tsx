import { Meta, StoryFn } from '@storybook/react';
import { SuspenseDecorator } from '@/shared/config/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT), SuspenseDecorator],
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'lorem ipsum',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'lorem ipsum',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
