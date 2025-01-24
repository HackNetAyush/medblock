import z from "zod";

export const SignupSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  designation: z.enum(["doctor", "patient"]),
});

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
