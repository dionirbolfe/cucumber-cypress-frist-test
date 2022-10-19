import {After, Before} from "cypress-cucumber-preprocessor/steps";


Before({tags: "@Login"}, () => {
    cy.Login(Cypress.env('base'))
});
