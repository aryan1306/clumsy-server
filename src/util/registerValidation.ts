import { EMAIL_PATTERN } from "../constants";
import { UserPasswordInput } from "./UserPasswordInput";

export const registerValidation = (options: UserPasswordInput) => {
  if (options.username.length <= 4) {
    return [
      {
        field: "username",
        message: "username length should be greater than 4",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include @ in username",
      },
    ];
  }
  if (!options.email.match(EMAIL_PATTERN)) {
    return [
      {
        field: "email",
        message: "invaild email address! Check the email entered and try again",
      },
    ];
  }
  //@TODO enable during prod
  // const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  // if (!options.password.match(reg)) {
  if (options.password.length <= 3) {
    return [
      {
        field: "password",
        message: "length should be greater than 4",
      },
    ];
  }
  return null;
};
