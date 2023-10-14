import login from "../../support/projectObject/loginAdmin";
import apiHelpers from '../../support/helpers/apiHelpers'
const loginObj: login = new login();

describe("login admin", () => {
  beforeEach(function () {
    cy.visit("/");
    loginObj.loginAdmin("Admin", "admin123");
  });

  it("total length", () => {
    cy.visit("/web/index.php/recruitment/viewCandidates");
    apiHelpers.interceptApi().as("intercept");
    cy.wait("@intercept").then((data) => {
      console.log(data.response?.body.meta.total);
      loginObj.findRows(data.response?.body.meta.total);
    });
  });
  
})