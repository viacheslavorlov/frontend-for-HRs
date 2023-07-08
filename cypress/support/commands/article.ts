import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Kotlin news',
    subtitle: 'Что не нового в Kotlin за 2022 год декабрь?',
    img: 'https://kotlinlang.org/assets/images/twitter/general.png',
    views: 3422,
    createdAt: '01.01.2023',
    userId: '1',
    type: ['IT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах.',
                'Существуют и другие способы запуска JS-кода в браузере.',
            ],
        },
    ],
    user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: ['ADMIN'],
        avatar:
            'https://images.unsplash.com/photo-1519755898819-cef8c3021d6f?ixlib=rb-4.0' +
            '.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
};

export const createArticle = (article: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'auth' },
        body: article || defaultArticle,
    }).then((resp) => resp.body);
};

export const deleteArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'auth' },
    });
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}
