
class Employee {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    logoutDropdown:()=>cy.get(".oxd-userdropdown-tab"),
    logoutBtn:()=>cy.contains("Logout")
   
  };

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }
  logout(){
    this.elements.logoutDropdown().click()
    this.elements.logoutBtn().click({ multiple: true })
  }

}

export default Employee;
