import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Kotlin news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    views: 12,
    userId: '3',
    createdAt: '25.01.2023',
    type: [
        'IT',
    ],
    blocks: [],
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
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}
