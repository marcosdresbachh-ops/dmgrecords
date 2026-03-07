'use client';

import { usePathname } from 'next/navigation';
import { RadioHeader } from '@/components/radio/RadioHeader';
import { RadioPlayer } from '@/components/radio/RadioPlayer';
import { RadioFooter } from '@/components/radio/RadioFooter';
import { RadioScripts } from '@/components/radio/RadioScripts';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppRoute = !pathname.startsWith('/admin') && !pathname.startsWith('/login-adm-const-adm-fm98,7') && !pathname.startsWith('/radio-indoor') && !pathname.startsWith('/vale-indica/painel');

  if (isAppRoute) {
    return (
      <>
        <RadioHeader />
        <RadioPlayer />
        <main>{children}</main>
        <RadioFooter />
        <RadioScripts />
      </>
    );
  }

  return <>{children}</>;
}
