/// <reference types="Cypress"/>

it('case№1-correct username and password', () => {
cy.viewport(1024, 768)
cy.visit("https://chlist.sitechco.ru/")  
.get('[id="user_auth_email"]') .type('yaseml@mail.ru')    
.get('[id="user_auth_password"]') .type('v2dED8x8d5ysE!p')
.get('[class="btn blue"]') .eq(0) .click()
})

it('case№2-login of an unregistered user, password of a registered user', () => {
    cy.visit("https://chlist.sitechco.ru/")  
    .get('[id="user_auth_email"]') .type('yaseml1@mail.ru')    
    .get('[id="user_auth_password"]') .type('v2dED8x8d5ysE!p')
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains('Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
    .should('have.text', 'Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
})

it('case№3-correct login, incorrect password', () => {
    cy.visit("https://chlist.sitechco.ru/")  
    .get('[id="user_auth_email"]') .type('yaseml@mail.ru')    
    .get('[id="user_auth_password"]') .type('1v2dED8x8d5ysE!p')
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains ('Введён неверный пароль. Попробуйте ещё раз')
    .should('have.text', 'Введён неверный пароль. Попробуйте ещё раз')
})

it('case№4-login of another user, correct password', () => {
    cy.visit("https://chlist.sitechco.ru/")  
    .get('[id="user_auth_email"]') .type('ya@enlighted.ru')    
    .get('[id="user_auth_password"]') .type('v2dED8x8d5ysE!p')
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains ('Введён неверный пароль. Попробуйте ещё раз')
    .should('have.text', 'Введён неверный пароль. Попробуйте ещё раз')
})

it('case№5-without login', () => {
    cy.visit("https://chlist.sitechco.ru/")     
    .get('[id="user_auth_password"]') .type('v2dED8x8d5ysE!p')
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains('Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
    .should('have.text', 'Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
})

it('case№6-no password', () => {
    cy.visit("https://chlist.sitechco.ru/")  
    .get('[id="user_auth_email"]') .type('yaseml@mail.ru')    
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains ('Введён неверный пароль. Попробуйте ещё раз')
    .should('have.text', 'Введён неверный пароль. Попробуйте ещё раз')
})
    
it('case№7-without login and password', () => {
    cy.visit("https://chlist.sitechco.ru/")      
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains('Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
    .should('have.text', 'Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
})

it('case№8-in the login field password, in the password field login', () => {
    cy.visit("https://chlist.sitechco.ru/")  
    .get('[id="user_auth_email"]') .type('v2dED8x8d5ysE!p')    
    .get('[id="user_auth_password"]') .type('yaseml1@mail.ru')
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains('Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
    .should('have.text', 'Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
})

it('case№9-gaps', () => {
    cy.visit("https://chlist.sitechco.ru/")  
    .get('[id="user_auth_email"]') .type('     ')    
    .get('[id="user_auth_password"]') .type('     ')
    .get('[class="btn blue"]') .eq(0) .click()
    cy.contains('Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
    .should('have.text', 'Пользователь с таким email не зарегистрирован. Пожалуйста, зарегистрируйтесь.')
})






