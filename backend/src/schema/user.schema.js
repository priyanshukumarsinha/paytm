import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3).max(30),
  firstname: z.string().max(30),
  lastname: z.string().max(30),
  password: z.string().min(6)
});