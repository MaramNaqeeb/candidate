import generatingFunctions from "./genericFunctions";
import { EmployeePayload } from "../API/payload/employeePayload";
import { UserPayload } from "../API/payload/userPayload";
import { empId } from "./apiHelpers";
export const firstName: string = ` Jane `;
export const lastName: string = ` Lother ${generatingFunctions.randomNumber()}`;
export const employeeFirstName: string = `Ann`;
export const employeeLastName: string = `Hathaway ${generatingFunctions.randomNumber()}`;
const employeeId: any = `${generatingFunctions.randomNumber()}`;
export const username: string = `Johnj${generatingFunctions.randomNumber()}`;
export const password:string=`123qwe,./${generatingFunctions.randomNumber()}`

export const newEmployeeData = (e?: EmployeePayload): any => {
  var employee: any = {
    empPicture: null,
    employeeId: employeeId,
    firstName: employeeFirstName,
    lastName: employeeLastName,
    middleName: "",
  };
  return employee;
};
export const newUserData= (u?: UserPayload): any => {
  var user: any = {
    empNumber: empId,
    password: password,
    status: true,
    userRoleId: 2,
    username: username,
  };
  return user;
};

