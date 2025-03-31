describe('landed on flipkar',() =>{

    it('Open the page and select the offers with 50%',()=>{
        cy.visit("https://www.flipkart.com/")

        cy.wait(5000); // Wait for the page to load
        
        cy.contains('Min. 50% Off', { timeout: 10000 }).should('exist').click({ force: true });
    })


})