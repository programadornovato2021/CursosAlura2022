/// <reference types="cypress" />

describe('Login e registro de usuarios alura pic', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    });


    it('Verifica mensagens validacao', () => {
       cy.contains('a', 'Register now').click()
       cy.contains('button', 'Register').click()
       cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
       cy.contains('button', 'Register').click()
       cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
       cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
       cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')

    });


    it('Verifica mensagens e-mail invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('Jacqualine')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
        
        
 
     });


     it('Verifica mensagens de senha invalida', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
        
        
 
     });

     it('Verifica mensagens de o nome do usuario deve estae em minúsculo', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="userName"]').type('TESTE')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
        
        
 
     });
});