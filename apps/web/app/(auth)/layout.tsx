import type {PropsWithChildren} from 'react';

export default function AuthLayout({children}: PropsWithChildren) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
