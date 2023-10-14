import apiHelpers from "../../support/helpers/apiHelpers";
import candidate from "../../support/projectObject/candidate";

const candidateObj: candidate = new candidate();

describe("OrangeHRM-create and edit vacancy", () => {
  
  beforeEach(function () {
    cy.visit("/");
    candidateObj.loginFUNC("Admin", "admin123");
    apiHelpers.addCandidate()

  });

  it("TCs2: OrangeHRM-edit vacancy", () => {
    apiHelpers.stateShortlistStatus()
    candidateObj.scheduleInterview()
  });
});
