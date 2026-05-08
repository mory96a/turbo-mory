import {z} from 'zod';

export const signInSchema = z.object({
  email: z.email({message: 'Invalid email'}),
  password: z.string().min(6, {message: 'Min 6 characters'}),
});

export const signUpSchema = z
  .object({
    name: z.string().min(2, {message: 'Min 2 characters'}),
    email: z.email({message: 'Invalid email'}),
    password: z.string().min(6, {message: 'Min 6 characters'}),
    confirmPassword: z.string(),
  })
  .refine(refineConfirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

function refineConfirmPassword(data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  return data.password === data.confirmPassword;
}
