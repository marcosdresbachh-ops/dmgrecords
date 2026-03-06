'use client';
import { useRouter } from 'next/navigation';
import { Radio } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirects to the admin panel.
    // Replace with actual authentication logic later.
    router.push('/admin');
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'hsl(var(--background))',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '24px'
        }}>
            <div style={{
                width: '42px',
                height: '42px',
                background: 'hsl(var(--primary))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'hsl(var(--primary-foreground))'
            }}>
                <Radio size={20}/>
            </div>
            <div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 900, textAlign: 'left' }}>
                    DMG <span style={{ color: 'hsl(var(--primary))' }}>Records</span>
                </h1>
                <p style={{fontFamily:"'DM Mono', monospace", fontSize:'.5rem', letterSpacing:'.1em', color:'hsl(var(--muted-foreground))', textAlign:'left', textTransform: 'uppercase' }}>Painel Administrativo</p>
            </div>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              fontSize: '.78rem',
              fontWeight: 600,
              color: 'hsl(var(--foreground))',
              marginBottom: '6px'
            }}>E-mail</label>
            <input
              type="email"
              defaultValue="admin@dmgrecords.com.br"
              style={{
                width: '100%',
                background: 'hsl(var(--muted))',
                border: '1.5px solid hsl(var(--border))',
                borderRadius: '6px',
                padding: '10px 14px',
                fontSize: '.85rem',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              fontSize: '.78rem',
              fontWeight: 600,
              color: 'hsl(var(--foreground))',
              marginBottom: '6px'
            }}>Senha</label>
            <input
              type="password"
              defaultValue="password"
              style={{
                width: '100%',
                background: 'hsl(var(--muted))',
                border: '1.5px solid hsl(var(--border))',
                borderRadius: '6px',
                padding: '10px 14px',
                fontSize: '.85rem',
                outline: 'none',
              }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            background: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '.85rem',
            cursor: 'pointer'
          }}>
            Entrar no Painel
          </button>
        </form>
      </div>
    </div>
  );
}
