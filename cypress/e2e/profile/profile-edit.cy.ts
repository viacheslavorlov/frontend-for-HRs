describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
        });
    });
    it('profile change', () => {

    });
});
