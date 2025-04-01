
import login from "../../../pages/login/login.po"
import data from "../../../fixtures/cred.json"
import hompeage from "../../../pages/dashboard/homepage.po"
import hp from "../../../pages/dashboard/homepage.po"

describe("verify the homepage",()=>{

    before("login to the application", ()=>{
        cy.visit('/web/index.php/auth/login');
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.log("url is verified");
        login.logintoapp(data.username,data.password);
    })

    it("verify the homepage",()=>{
        hp.verifysidebar()
    })

    it("verify the sidebar button", ()=>{
        cy.wait(10000) //
        cy.url().then((currentUrl) => {
            cy.log(`Current URL: ${currentUrl}`);
          });
        hp.verifythesidebarclick()

        cy.get(hp.sidebarbuttonclose).should("be.visible")
        cy.log("sidebar is closed")
    
    })

    it("verify the menuiteams",()=>{
        
    })

})