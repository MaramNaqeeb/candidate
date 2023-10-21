const baseUrl = Cypress.config().baseUrl;
import { newEmployee, newUser } from "./payLoadFunctions";
export let empId: any;
export let vacancyId: any;
export var candidateId: any;
export const URLs = {
  addEmployeeForm: `${baseUrl}/web/index.php/pim/addEmployee`,
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  user: `${baseUrl}/web/index.php/api/v2/admin/users`,
  delete: `${baseUrl}/web/index.php/api/v2/pim/employees`,
};

export default class apiHelpers {
  static addEmployee() {
    cy.employee("POST", URLs.employee, newEmployee())
      .then((response) => {
        empId = response.data.empNumber;
      })

      .then(() => cy.user("POST", URLs.user, newUser()));
  }
}
