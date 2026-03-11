'use client';
import { useRouter } from 'next/navigation';
import { Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/shared/Logo';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Logo className="mx-auto mb-6" width={180} height="auto" />
          <CardDescription className="font-['DM_Mono',monospace] text-xs uppercase tracking-widest pt-1">
            Painel Administrativo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@amorfm.com.br"
                defaultValue="admin@amorfm.com.br"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                defaultValue="password"
                required
              />
            </div>
            <Button type="submit" className="w-full !mt-6" variant="destructive">
              Entrar no Painel
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
