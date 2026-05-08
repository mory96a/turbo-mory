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
import {signUpAction} from '@/lib/actions/auth';
import {useSession} from '@/lib/auth/client';

export default function SignUpPage() {
  const router = useRouter();
  const {refetch} = useSession();

  const [state, action, isPending] = useActionState(handleSubmit, null);

  async function handleSubmit(_: unknown, formData: FormData) {
    const result = await signUpAction(_, formData);

    if (result.success) {
      refetch();
      router.push('/');
    }

    return result;
  }

  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action} className="flex flex-col gap-4">
            {!!state?.message && (
              <p className="text-sm text-red-500 bg-red-50 p-2 rounded">
                {state.message}
              </p>
            )}
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" />
              {!!state?.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name[0]}</p>
              )}
            </div>
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
            <div className="flex flex-col gap-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
              {!!state?.errors?.confirmPassword && (
                <p className="text-sm text-red-500">
                  {state.errors.confirmPassword[0]}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>
          <p className="text-sm text-center mt-4 text-muted-foreground">
            Already have an account?{' '}
            <Link href="/signin" className="underline hover:text-foreground">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
