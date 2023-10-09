// noinspection ES6ConvertVarToLetConst

import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { UserRole } from '@/entities/User';
import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { Meta, StoryFn } from '@storybook/react';
import ArticleDetailedPage from './ArticleDetailedPage';

const featureFlags = {
    isArticleRatingEnabled: true,
    isCounterEnabled: true,
};
const article: Article = {
    id: '13',
    title: 'Kotlin news',
    subtitle: 'Что не нового в Kotlin за 2022 год декабрь?',
    img: '',
    views: 3422,
    userId: '1',
    createdAt: '01.01.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
    user: {
        id: '1',
        username: 'admin',
        roles: [UserRole.ADMIN],
        features: {
            isArticleRatingEnabled: true,
            isCounterEnabled: true,
        },
        avatar: 'https://images.unsplash.com/photo-1519755898819-cef8c3021d6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
};

export default {
    title: 'pages/ArticleDetailedPage',
    component: ArticleDetailedPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        // FeatureFlagsDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        // StoreDecorator({
        //     user: {
        //         authData: {
        //             id: '1',
        //             username: 'user',
        //             features: {
        //                 isArticleRatingEnabled: true,
        //                 isCounterEnabled: true,
        //             },
        //         },
        //     },
        // }),
    ],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/articles?_limit=4',
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                    { ...article, id: '4' },
                ],
            },
        ],
    },
} as Meta<typeof ArticleDetailedPage>;

const Template: StoryFn<typeof ArticleDetailedPage> = () => <ArticleDetailedPage />;

export const LightArticleDetaildPage = Template.bind({});
LightArticleDetaildPage.args = {};
LightArticleDetaildPage.decorators = [StoreDecorator({ articleDetails: { data: article } })];

export const DarkArticleDetaildPage = Template.bind({});
DarkArticleDetaildPage.args = {};
DarkArticleDetaildPage.decorators = [ThemeDecorator(Theme.DARK)];
