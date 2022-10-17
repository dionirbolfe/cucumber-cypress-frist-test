import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";


Given("que o usuário deseja cadastrar uma uma vm", () => {
    cy.Login(Cypress.env('base'))
});
And("acessa o menu Add > VM", function () {
    cy.wait('@dash_principal').then(
        ()=>{
            cy.get('.nav-item > .nav-link > .mdi > b').contains('Add').click()
            cy.get('.nav-item > .dropdown-menu > .dropdown-item').contains("VM").click()
        }
    )
});
And('informa a senha da VM {string}', function (string) {
    cy.get('input[name=senhavm]').type(string)
});
And("informa a descrição da VM {string}",(string)=>{
    cy.get('textarea[name=descvm]').type(string)
})
And("seleciona o template {string}",(string)=>{
    cy.get('select[name=opcaovm]').select(string)
})
When("no form de criação clica no botão criar",()=>{
    cy.intercept('POST',
        "/vm/Controller/loadCriarVM.php",
        {fixture: 'create_success.json'})
        .as("cria_VM")
    cy.get("button.btn.btn-success").contains("Criar").click()
})
Then("a mensagem de criação deve aparecer",()=>{
    cy.wait('@cria_VM').then(()=>{
        cy.get('.ajs-content').contains("Sua VM foi criada:").should('be.visible')
    })
})