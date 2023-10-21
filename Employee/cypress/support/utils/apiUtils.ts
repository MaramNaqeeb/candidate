import { candidateResponse } from "../API/response/candidateResponse";
import { employeeResponse } from "../API/response/employeeResponse";
import { userResponse } from "../API/response/userResponse";
import { vacancyResponse } from "../API/response/vacancyResponse";

declare global {
  namespace Cypress {
    interface Chainable {
      candidate: (
        method: string,
        requestUrl: string,
        candidatePayload: string
      ) => Chainable<candidateResponse>;
    }
  }
}

Cypress.Commands.add(
  "candidate",
  (method: string, requestUrl: string, candidatePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: candidatePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);
declare global {
  namespace Cypress {
    interface Chainable {
      employee: (
        method: string,
        requestUrl: string,
        employeePayload: string
      ) => Chainable<employeeResponse>;
    }
  }
}

Cypress.Commands.add(
  "employee",
  (method: string, requestUrl: string, employeePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: employeePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);
declare global {
  namespace Cypress {
    interface Chainable {
      user: (
        method: string,
        requestUrl: string,
        userPayload: string
      ) => Chainable<userResponse>;
    }
  }
}

Cypress.Commands.add(
  "user",
  (method: string, requestUrl: string, userPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: userPayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);
declare global {
  namespace Cypress {
    interface Chainable {
      vacancy: (
        method: string,
        requestUrl: string,
        vacancyPayload: string
      ) => Chainable<vacancyResponse>;
    }
  }
}

Cypress.Commands.add(
  "vacancy",
  (method: string, requestUrl: string, vacancyPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: vacancyPayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);
