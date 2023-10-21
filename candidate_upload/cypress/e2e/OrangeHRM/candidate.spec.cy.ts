import candidate from "../../support/projectObject/candidate";

const candidateObj: candidate = new candidate();

describe("OrangeHRM-create login prerequisite", () => {
  beforeEach(function () {
    cy.fixture("candidate.json").as("fileUpload");
    cy.visit("/");
    candidateObj.loginFUNC("Admin", "admin123");
    cy.visit("/web/index.php/recruitment/viewCandidates");
  });

  it("TCs1: OrangeHRM-addCandidate", () => {
    candidateObj.addCandidate();
    let filePah: string = "cypress/fixtures/Resume.txt";
    candidateObj.uploadFile(filePah);
    candidateObj.assertFile();
  });
  
});
