class homepage{

    sidebar=".oxd-sidepanel";

    logo="a[class='oxd-brand']";
    searchbar=".oxd-main-menu-search";
    listiteam="ul[class='oxd-main-menu']";
    sidebarbutton="i[class='oxd-icon bi-chevron-left']";
    sidebarbuttonclose="i[class='oxd-icon bi-chevron-right']";
    menuiteam=[]

    verifysidebar(){

        cy.get(this.logo).should('be.visible');
        cy.wait(2000);
        
        cy.log("logo is displayed");
        cy.get(this.sidebar).debug();

        cy.get(this.searchbar).should("be.visible");
        cy.log("search bar is displayed")
    }

    verifythesidebarclick(){
        cy.get(this.sidebarbutton).click();
    }
    verifylistmenu(){
        cy.get(this.listiteam)
        .each(($el, index, $list) => {
            cy.wrap($el).invoke('text').then((text) => {
                cy.log(`Menu Item ${index + 1}: ${text.trim()}`);
                this.menuiteam=text.trim();
            });
        });
    }
    


}

const hp= new homepage()

export default hp