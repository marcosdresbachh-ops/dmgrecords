import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_DMGSUPABASE_URL!,
    process.env.NEXT_PUBLIC_DMGSUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Se usuario nao autenticado tenta acessar rotas protegidas do hub (dashboard),
  // redireciona para /hub (login). As rotas do painel admin tem auth propria.
  // Nota: /hub sozinho e a pagina de login/cadastro, entao nao protegemos ela.
  // Protegemos somente quando o usuario esta no dashboard (verificado no client).

  return supabaseResponse;
}
