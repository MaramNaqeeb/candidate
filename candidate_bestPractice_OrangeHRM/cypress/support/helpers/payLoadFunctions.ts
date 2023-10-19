import generatingFunctions from "./genericFunctions";
import { candidatePayload } from "../API/payload/candidatePayload";
import { employeePayload } from "../API/payload/employeePayload";
import { vacancyPayload } from "../API/payload/vacancyPayload";
import { userPayload } from "../API/payload/userPayload";
import { empId } from "./apiHelpers";
import { vacancyId } from "./apiHelpers";
import { candidateId } from "./apiHelpers";
export const firstName: string = ` Jane `;
export const lastName: string = ` Lother ${generatingFunctions.randomNumber()}`;
const email: string = `Jane${generatingFunctions.randomNumber()}@gmail.com`;
export const employeeFirstName: string = `Ann`;
export const employeeLastName: string = `Hathaway ${generatingFunctions.randomNumber()}`;
const employeeId: any = `${generatingFunctions.randomNumber()}`;
const username: string = `John ${generatingFunctions.randomNumber()}`;

export const newEmployee = (e?: employeePayload): any => {
  var employee: any = {
    empPicture: null,
    employeeId: employeeId,
    firstName: employeeFirstName,
    lastName: employeeLastName,
    middleName: "",
  };
  return employee;
};
export const newUser = (u?: userPayload): any => {
  var user: any = {
    empNumber: empId,
    password: "123qwe,./",
    status: true,
    userRoleId: 2,
    username: username,
  };
  return user;
};

export const newVacancy = (v?: vacancyPayload): any => {
  var vacancy: any = {
    description: "",
    employeeId: empId,
    isPublished: true,
    jobTitleId: 1,
    name: "Testing" || v?.name,
    numOfPositions: 2,
    status: true,
  };
  return vacancy;
};
export const newCandidate = (candidate?: candidatePayload): any => {
  var addCandidate: any = {
    comment: null,
    consentToKeepData: false,
    contactNumber: null,
    dateOfApplication: "2023-10-14",
    email: email,
    firstName: firstName,
    keywords: null,
    lastName: lastName,
    middleName: null,
    vacancyId: vacancyId,
  };
  return addCandidate;
};
export const shortlistStatus = (): any => {
  var shortlist: any = {
    note: null,
  };
  return shortlist;
};

export const deleteCandidate = (): any => {
  var deleteOneCandidate: any = {
    ids: [candidateId],
  };
  return deleteOneCandidate;
};
