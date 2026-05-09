import {describe, expect, it} from 'vitest';
import {signInSchema, signUpSchema} from '@/lib/validations/auth';

describe('signInSchema', () => {
  it('accepts valid email and password', () => {
    const result = signInSchema.safeParse({
      email: 'test@example.com',
      password: '123456',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = signInSchema.safeParse({
      email: 'not-an-email',
      password: '123456',
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Invalid email');
  });

  it('rejects password shorter than 6', () => {
    const result = signInSchema.safeParse({
      email: 'test@example.com',
      password: '12345',
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Min 6 characters');
  });
});

describe('signUpSchema', () => {
  it('accepts valid data', () => {
    const result = signUpSchema.safeParse({
      name: 'John',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456',
    });
    expect(result.success).toBe(true);
  });

  it('rejects name shorter than 2', () => {
    const result = signUpSchema.safeParse({
      name: 'J',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456',
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Min 2 characters');
  });

  it('rejects when passwords do not match', () => {
    const result = signUpSchema.safeParse({
      name: 'John',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: 'wrong',
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe("Passwords don't match");
    expect(result.error?.issues[0]?.path[0]).toBe('confirmPassword');
  });
});
