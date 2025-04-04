class homepageheader{
    header= "div[class='oxd-topbar-header']";
    upgrad="button[class='oxd-glass-button orangehrm-upgrade-button']";
    profiledrop="li[class='oxd-userdropdown']";
    dropdown='li[class="oxd-userdropdown"]';

    verifyheader(){
        cy.get(this.header).should("be.visible")
    }

    verifyupgrade(){
        cy.get(this.upgrad).should("be.visible")
    }

    verifyprofile(){
        cy.get(this.profiledrop).should("be.visible").contains(this.dropdown)
    }
}

const header= new homepageheader()

export default header