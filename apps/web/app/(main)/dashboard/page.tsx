import {requireSession} from '@/lib/dal/auth';

export default async function DashboardPage() {
  const session = await requireSession();

  return <h1>this is your dashboard for {session.user.name}</h1>;
}
