import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const LightAddCommentForm = Template.bind({});
LightAddCommentForm.args = {
    onSendComment: action('onSendComment'),
};
LightAddCommentForm.decorators = [StoreDecorator({})];

export const DarkAddCommentForm = Template.bind({});
DarkAddCommentForm.args = {
    onSendComment: action('onSendComment'),
};
DarkAddCommentForm.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
