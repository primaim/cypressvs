
describe('My First Test', () => {
    it('verify title-positive', () => {
       cy.visit("https://opensource-demo.orangehrmlive.com/") // To launch the URL
       cy.title().should('eq','OrangeHRM')// To verify title of the Page
  })
   
  
})


