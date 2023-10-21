class Candidate {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    firstName: () => cy.get(".oxd-input.oxd-input--active.orangehrm-firstname"),
    lastName: () => cy.get(".oxd-input.oxd-input--active.orangehrm-lastname"),
    email: () => cy.get(".oxd-input").eq(4),
    uploadIcon: () => cy.get(".oxd-file-div > .oxd-icon"),
    uploadFile: () => cy.get('input[type="file"]'),
    saveBtn: () => cy.get('button[type="submit"]'),
    addCandidateBtn: () => cy.get(".orangehrm-header-container > .oxd-button"),
    assert: () => cy.get(".orangehrm-file-preview"),
    loadingSpinner: () => cy.get(".oxd-loading-spinner"),
  };

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click();
  }

  uploadFile(filePath: string) {
    this.elements.addCandidateBtn().click();
    this.elements.firstName().type("John");
    this.elements.lastName().type("Hathaway");
    this.elements.email().type("j@gmail.com");
    this.elements.uploadIcon().click();
    this.elements.uploadFile().selectFile(filePath, { force: true });
    this.elements.saveBtn().click();
    this.elements.loadingSpinner().should("not.exist");
    this.elements
      .assert()
      .should("contain", filePath.substring(filePath.lastIndexOf("/") + 1));
  }
}
export default Candidate;
