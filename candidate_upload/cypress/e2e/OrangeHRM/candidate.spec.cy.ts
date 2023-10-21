import candidate from "../../support/projectObject/candidate";

const candidateObj: candidate = new candidate();

describe("OrangeHRM-create and edit vacancy", () => {
  beforeEach(function () {
    cy.fixture('candidate.json').as('fileUpload')
    cy.visit("/");
    candidateObj.loginFUNC("Admin", "admin123");
  });

  it("TCs2: OrangeHRM-edit vacancy", () => {
    let filePah:string="cypress/fixtures/Resume.txt"
      cy.visit("/web/index.php/recruitment/viewCandidates");
      candidateObj.addCandidate(),
      candidateObj.uploadFile(filePah);
      candidateObj.assertFile()
    })
   
  });
