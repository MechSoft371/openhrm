class loginpage{

    //logo=img[alt='company-branding']
    // username=input[name='username']
    // password=input[name='password']
    // loginbtn=button[type='submit']

    logintoapp(username,password){
        cy.get("input[name='username']").type(username)
        cy.get("input[name='password']").type(password)
        cy.get("button[type='submit']").click()
    }
}

const login = new loginpage()

export default login