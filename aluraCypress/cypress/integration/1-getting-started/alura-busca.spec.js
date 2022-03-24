/// <reference types="cypress" />

describe('alura busca cursos', () => {
    
    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    });


    it.only('Buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java')
        cy.get('.header-barraBusca-form-submit').click()
        cy.get('h4.busca-resultado-nome').should('contain','Formação Certificação Java')
    });
});