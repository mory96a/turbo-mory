import {prisma} from '@repo/db';
import {betterAuth} from 'better-auth';
import {prismaAdapter} from 'better-auth/adapters/prisma';
import {nextCookies} from 'better-auth/next-js';

export function createServerAuth(options?: {trustedOrigins: string[]}) {
  return betterAuth({
    database: prismaAdapter(prisma, {provider: 'postgresql'}),
    emailAndPassword: {enabled: true, autoSignIn: true},
    trustedOrigins: options?.trustedOrigins,
    plugins: [nextCookies()],
    advanced: {
      disableOriginCheck: true,
    },
  });
}

export {toNextJsHandler} from 'better-auth/next-js';
