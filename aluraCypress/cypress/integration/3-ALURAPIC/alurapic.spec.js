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

     it('verifica mensagens de senha com menos de 8 caracteres', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="password"]').type('123');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
   
  })

  it('fazer login de usuario valido', () => {
      cy.login('flavio', '123');
      cy.contains('a', '(Logout)').should('be.visible');
  })

  it('fazer login de usuario invalido', () => {
      cy.login('jacqueline', '1234');
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Invalid user name or password');
      })
  })

  const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it(`registra novo usuario ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    });


});