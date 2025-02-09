import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
      invalid_type_error: "username must be a string",
    })
    .min(3, { message: "Must be 3 or more characters long" })
    .max(30, { message: "Must be 30 or less characters long" }),
  firstname: z
    .string({
      required_error: "firstname is required",
      invalid_type_error: "firstname must be a string",
    })
    .max(30, { message: "Must be 30 or less characters long" }),
  lastname: z
    .string({
      required_error: "lastname is required",
      invalid_type_error: "lastname must be a string",
    })
    .max(30, { message: "Must be 30 or less characters long" }),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password must be a string",
    })
    .min(6, { message: "Password must be 6 or more characters long" }),
});
