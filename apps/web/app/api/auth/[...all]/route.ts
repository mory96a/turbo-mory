import {toNextJsHandler} from '@repo/auth/server';
import {serverAuth} from '@/lib/auth/server';

export const {GET, POST} = toNextJsHandler(serverAuth);
