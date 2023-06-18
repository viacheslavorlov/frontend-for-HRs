import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.ORANGE)],
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Orange = Template.bind({});
Orange.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'UserName',
            avatar: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        },
        text: 'comment text',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'UserName',
            avatar: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        },
        text: 'comment text',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'UserName',
            avatar: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        },
        text: 'comment text',
    },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
