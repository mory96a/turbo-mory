'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@repo/ui';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useActionState} from 'react';
import {signInAction} from '@/lib/actions/auth';
import {useSession} from '@/lib/auth/client';

export default function SignInPage() {
  const router = useRouter();
  const {refetch} = useSession();

  const [state, action, isPending] = useActionState(handleSubmit, null);

  async function handleSubmit(_: unknown, formData: FormData) {
    const result = await signInAction(_, formData);

    if (result.success) {
      refetch();
      router.push('/');
    }

    return result;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action} className="flex flex-col gap-4">
            {!!state?.message && (
              <p className="text-sm text-red-500 bg-red-50 p-2 rounded">
                {state.message}
              </p>
            )}
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
              {!!state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
              {!!state?.errors?.password && (
                <p className="text-sm text-red-500">
                  {state.errors.password[0]}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <p className="text-sm text-center mt-4 text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline hover:text-foreground">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
