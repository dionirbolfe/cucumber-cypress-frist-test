
Cypress.Commands.add('Login', (url) => {
    cy.visit(url);
    cy.get('input[name=email]').type(Cypress.env('usuario'));
    cy.get('input[name=pass]').type(atob(Cypress.env('senha')));
    cy.get('button.login100-form-btn').contains('Login').click();
    cy.intercept('POST','/vm/Controller/Dashboard.php').as('dash_principal')
});
