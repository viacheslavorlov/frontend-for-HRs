import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ArticleView } from '../../model/consts/articleConst';
import { ArticleList } from './ArticleList';
import { Article } from '../../model/types/type';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        (StoryComponent: Story) => (
            <div style={{ width: '100vw', height: '100vh' }}>
                <StoryComponent />
            </div>
        ),
    ],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const articles = new Array(10).fill(0).map(
    (item) =>
        ({
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1022,
            createdAt: '26.02.2022',
            user: {
                id: '1',
                username: 'Viacheslav',
                // eslint-disable-next-line max-len
                avatar: 'https://images.unsplash.com/photo-1519755898819-cef8c3021d6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            },
            type: ['IT', 'SCIENCE', 'Cultutre', 'POLITICS', 'MEDICINE'],
            blocks: [
                {
                    id: '1',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        // eslint-disable-next-line max-len
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        // eslint-disable-next-line max-len
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        // eslint-disable-next-line max-len
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '4',
                    type: 'CODE',
                    // eslint-disable-next-line max-len
                    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
                },
                {
                    id: '5',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        // eslint-disable-next-line max-len
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        // eslint-disable-next-line max-len
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '2',
                    type: 'IMAGE',
                    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    title: 'Рисунок 1 - скриншот сайта',
                },
                {
                    id: '3',
                    type: 'CODE',
                    // eslint-disable-next-line max-len
                    code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
                },
                {
                    id: '7',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        // eslint-disable-next-line max-len
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        // eslint-disable-next-line max-len
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '8',
                    type: 'IMAGE',
                    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    title: 'Рисунок 1 - скриншот сайта',
                },
                {
                    id: '9',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        // eslint-disable-next-line max-len
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    ],
                },
            ],
        } as Article),
);

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles,
    isLoading: true,
    view: ArticleView.BIG,
    searchParams: true,
};
LoadingBig.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles,
    isLoading: true,
    view: ArticleView.SMALL,
    searchParams: true,
};

export const LightArticleList = Template.bind({});
LightArticleList.args = {
    view: ArticleView.SMALL,
    isLoading: false,
    articles,
};
LightArticleList.decorators = [];

export const LightArticleListBIG = Template.bind({});
LightArticleListBIG.args = {
    view: ArticleView.BIG,
    isLoading: false,
    articles,
};
LightArticleListBIG.decorators = [];

export const ArticleListError = Template.bind({});
ArticleListError.args = {
    view: ArticleView.SMALL,
    isLoading: false,
    articles: [],
};
ArticleListError.decorators = [ThemeDecorator(Theme.DARK)];
