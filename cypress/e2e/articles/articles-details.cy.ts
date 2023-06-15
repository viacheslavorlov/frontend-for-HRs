let currentArticleId = '';

describe('Articles details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle()
            .then((article) => {
                currentArticleId = article.id;
            })
            .then(() => {
                cy.visit(`articles/${currentArticleId}`);
            });
    });
    afterEach(() => {
        cy.deleteArticle(currentArticleId);
    });
    it('Статья загрузилась', () => {
        cy.getByTestId('ArticleDetails').should('exist');
    });

    it('Список рекомендаций и рейтинг загрузился', () => {
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
        cy.getByTestId('ArticleRating').should('exist');
    });

    it('Комментарий к статье', () => {
        cy.getByTestId('ArticleDetails');
        cy.getByTestId('ArticleDetailsCommentInput').should('exist').scrollIntoView();
        cy.addComment('Cypress test comment');
        cy.getByTestId('CommentText').should('have.length', 1);
    });

    it('Оценка статьи (рейтинг изменяется, изменяется заголовок рейтинга на оставленный фидбэк)', () => {
        cy.getByTestId('ArticleDetails');
        cy.getByTestId('ArticleRating').scrollIntoView();
        cy.getByTestId('ArticleRating.Paragraph').should('have.text', 'Оцените статью.');
        cy.get('[data-testid="StarRatingStar"]:nth-child(5)').click();
        cy.getByTestId('RatingModalInput').type('Cypress rating feedback');
        cy.getByTestId('RatingModalSend').click();
        cy.getByTestId('ArticleRating.Paragraph').should('have.text', 'Спасибо за оценку!');
        cy.reload();
        cy.getByTestId('ArticleRating.Paragraph').should('have.text', 'Cypress rating feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
