import {createAuthClient} from 'better-auth/react';

export function createClient() {
  return createAuthClient();
}

export type AuthClient = ReturnType<typeof createClient>;
