import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Vasya',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png',
            },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: {
                id: '1',
                username: 'Petya',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

export const Orange = Template.bind({});
Orange.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Vasya',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png',
            },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: {
                id: '1',
                username: 'Petya',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png',
            },
        },
    ],
    isLoading: false,
};
Orange.decorators?.push(ThemeDecorator(Theme.ORANGE));

export const NoComments = Template.bind({});
NoComments.args = {
    comments: [],
    isLoading: false,
};
