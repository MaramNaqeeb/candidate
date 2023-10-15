const baseUrl = Cypress.config().baseUrl;
export const URLs = {
  intercept:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC"
  
};
export default class apiHelpers {
  static interceptApi() {
    return cy.intercept(
      "GET",URLs.intercept
    );
  }

}
