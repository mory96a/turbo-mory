import {prisma} from '@repo/db';
import {betterAuth} from 'better-auth';
import {prismaAdapter} from 'better-auth/adapters/prisma';
import {createAuthClient} from 'better-auth/react';

export type AuthClient = ReturnType<typeof createClient>;

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export function createClient() {
  return createAuthClient();
}

export {toNextJsHandler} from 'better-auth/next-js';
