'use server';

import {z} from 'zod';
import {serverAuth} from '@/lib/auth/server';
import {signInSchema, signUpSchema} from '@/lib/validations/auth';

export async function signInAction(_: unknown, formData: FormData) {
  const validated = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validated.success) {
    const treeified = z.treeifyError(validated.error);

    return {
      success: false,
      message: 'Invalid email or password format',
      errors: {
        email: treeified.properties?.email?.errors,
        password: treeified.properties?.password?.errors,
      },
    };
  }

  try {
    const body = {
      email: validated.data.email,
      password: validated.data.password,
    };

    await serverAuth.api.signInEmail({body});

    return {
      success: true,
      message: 'Signed in successfully',
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Invalid credentials';

    return {success: false, message};
  }
}

export async function signUpAction(_: unknown, formData: FormData) {
  const validated = signUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validated.success) {
    const treeified = z.treeifyError(validated.error);

    const {name, email, password, confirmPassword} = treeified.properties || {};

    return {
      success: false,
      message: 'Invalid',
      errors: {
        name: name?.errors,
        email: email?.errors,
        password: password?.errors,
        confirmPassword: confirmPassword?.errors,
      },
    };
  }

  try {
    const body = {
      name: validated.data.name,
      email: validated.data.email,
      password: validated.data.password,
    };

    await serverAuth.api.signUpEmail({body});

    return {
      success: true,
      message: 'Signed up successfully',
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Sign up failed';

    return {success: false, message};
  }
}
