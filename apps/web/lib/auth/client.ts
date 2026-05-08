import {type AuthClient, createClient} from '@repo/auth/client';

const authClient: AuthClient = createClient({
  baseURL: process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000',
});

export const {useSession, signOut} = authClient;
