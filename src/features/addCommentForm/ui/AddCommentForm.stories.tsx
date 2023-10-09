import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        background: { control: 'background' },
    },
    parameters: {
        fetch: {
            json: {},
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const LightAddCommentForm = Template.bind({});
LightAddCommentForm.args = {
    onSendComment: action('onSendComment'),
};
LightAddCommentForm.decorators = [];

export const DarkAddCommentForm = Template.bind({});
DarkAddCommentForm.args = {
    onSendComment: action('onSendComment'),
};
DarkAddCommentForm.decorators = [ThemeDecorator(Theme.DARK)];
