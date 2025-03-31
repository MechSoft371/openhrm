import login from "../../../pages/login/login.po"
import data from "../../../fixtures/cred.json"
describe("login test suite",()=>{

    before("launch the app", ()=>{

        cy.visit('/web/index.php/auth/login');
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.log("url is verified");
    })

    it("login into the app", ()=>{

        login.logintoapp(data.username,data.password);
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    })



})