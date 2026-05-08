import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {cache} from 'react';
import {serverAuth} from '@/lib/auth/server';

export const getSession = cache(async () => {
  return await serverAuth.api.getSession({
    headers: await headers(),
  });
});

export async function requireSession() {
  const session = await getSession();
  if (!session) redirect('/signin');

  return session;
}
