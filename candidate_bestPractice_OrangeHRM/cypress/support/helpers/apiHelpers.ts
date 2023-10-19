const baseUrl = Cypress.config().baseUrl;
import genericFunctions from "./genericFunctions";
import {
  newCandidate,
  newEmployee,
  newUser,
  newVacancy,
  shortlistStatus,
} from "./payLoadFunctions";
import { deleteCandidate } from "./payLoadFunctions";
export let empId: any;
export let vacancyId: any;
export var candidateId: any;
export const URLs = {
  addEmployeeForm: `${baseUrl}/web/index.php/pim/addEmployee`,
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  vacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
  user: `${baseUrl}/web/index.php/api/v2/admin/users`,
  addVacancyForm: `${baseUrl}/web/index.php/recruitment/addJobVacancy`,
  candidate: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`,
  delete:`${baseUrl}/web/index.php/api/v2/recruitment/candidates`
};

export default class apiHelpers {
  static addCandidate() {
    cy.visit(URLs.addEmployeeForm);
    cy.employee("POST", URLs.employee, newEmployee())
      .then((response) => {
        empId = response.data.empNumber;
      })
      .then(() =>
        cy
          .visit(URLs.addEmployeeForm)
          .then(() =>
            cy
              .user("POST", URLs.user, newUser())
              .then(() =>
                cy
                  .visit(URLs.addVacancyForm)
                  .then(() => cy.vacancy("POST", URLs.vacancy, newVacancy()))
              )
          )
      )
      .then((response) => (vacancyId = response.data.id))
      .then(() =>
        cy
          .candidate("POST", URLs.candidate, newCandidate())
          .then((response) => {
            candidateId = response.data.id;
          })
      );
  }
  static stateShortlistStatus() {
    cy.visit(`/web/index.php/recruitment/addCandidate/${candidateId}`, {
      failOnStatusCode: false,
    });
    cy.candidate(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`,
      shortlistStatus()
    );
  }
  static deleteCandidate(){
    cy.api('DELETE',URLs.delete,deleteCandidate())
  }
}
