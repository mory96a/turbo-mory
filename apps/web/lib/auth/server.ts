import {createServerAuth} from '@repo/auth/server';

export const serverAuth = createServerAuth({trustedOrigins: ['*']});
