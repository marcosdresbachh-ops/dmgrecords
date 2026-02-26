import { redirect } from 'next/navigation';

export default function FerramentasPage() {
  // Redireciona para o HUB já que as ferramentas agora estão lá
  redirect('/hub');
}
