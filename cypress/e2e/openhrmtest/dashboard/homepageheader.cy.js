import data from "../../../fixtures/cred.json"
import login from "../../../pages/login/login.po"
import header from "../../../pages/dashboard/homepageheader.po"



describe("verify the header", ()=>{
    beforeEach("lanuch the website",()=>{
        cy.visit('/web/index.php/auth/login');
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.log("url is verified");
        login.logintoapp(data.username,data.password);
    })

    it("verify the header",()=>{
        
        header.verifyheader()
    })

    it("verify the upgrade",()=>{
        
        header.verifyupgrade()
    })

    it("verify the profile",()=>{
        
        header.verifyprofile()
    })
})