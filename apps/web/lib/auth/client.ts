import {type AuthClient, createClient} from '@repo/auth/client';

const authClient: AuthClient = createClient();

export const {useSession, signIn, signUp, signOut} = authClient;
