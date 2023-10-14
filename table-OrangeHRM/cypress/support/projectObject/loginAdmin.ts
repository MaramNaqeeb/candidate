class login {
  elements = {
    userName: () => cy.getByCy("Username"),

    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    invalidCredentials: () => cy.get(".oxd-alert-content > .oxd-text"),

    required: () => cy.get(".oxd-input-field-error-message"),
    dashboard: () => cy.get(".oxd-topbar-header-breadcrumb-module"),
    table: () => cy.get(".orangehrm-container"),
    // tableRow:()=>cy.get('.oxd-table-card')
  };

  loginAdmin(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }

  findRows(RowsLength: number): any {
    this.elements
      .table()
      .find(".oxd-table-body")
      .children()
      .should("have.length", RowsLength);
  }
}

export default login;
