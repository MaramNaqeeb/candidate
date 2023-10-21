import { employeeResponse } from "../API/response/employeeResponse";
import { userResponse } from "../API/response/userResponse";

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
