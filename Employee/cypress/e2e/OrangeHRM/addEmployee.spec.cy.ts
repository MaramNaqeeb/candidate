import apiHelpers from "../../support/helpers/apiHelpers";
import Employee from "../../support/projectObject/employee";
import { password, username } from "../../support/helpers/payLoadFunctions";

const employeeObj: Employee = new Employee();

describe("OrangeHRM-loginAdmin prerequisite", () => {
  beforeEach(function () {
    cy.visit("/");
    employeeObj.loginFUNC("Admin", "admin123");
  });
  it("TCs2: OrangeHRM-addEmployee", () => {
    apiHelpers.addEmployee();
    employeeObj.logout();
    employeeObj.loginFUNC(username, password);
  });
});
