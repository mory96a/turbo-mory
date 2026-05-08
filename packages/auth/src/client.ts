import {createAuthClient} from 'better-auth/react';

export function createClient({baseURL}: {baseURL: string}) {
  return createAuthClient({baseURL});
}

export type AuthClient = ReturnType<typeof createClient>;
