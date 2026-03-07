# Rádio DMG Records

Bem-vindo ao projeto da Rádio DMG Records! Esta é uma aplicação web moderna e completa para uma rádio online, construída com as mais recentes tecnologias para oferecer uma experiência rica e interativa tanto para os ouvintes quanto para os administradores.

## Visão Geral

A aplicação é dividida em três partes principais:

1.  **Site Público:** A interface principal para os ouvintes, onde eles podem ouvir a rádio ao vivo, interagir com a programação e conhecer mais sobre a DMG Records.
2.  **Painel Administrativo:** Uma área restrita e poderosa para a equipe da rádio gerenciar todo o conteúdo e operações.
3.  **Painel Indoor:** Uma tela de exibição especializada para ambientes comerciais, como lojas e restaurantes, que contrataram o serviço de rádio indoor.

## ✨ Principais Funcionalidades

### Site Público

-   **Player de Rádio Ao Vivo:** Um player funcional no topo da página que transmite a rádio 24/7, com informações em tempo real sobre a música e o programa no ar.
-   **Páginas Institucionais:** Seções completas como "Sobre Nós", "Nossa Equipe", "Programação" e "Notícias".
-   **Interação com Ouvintes:** Widgets para Chat ao Vivo e Pedidos de Música (automático ou para o locutor).
-   **Design Responsivo:** Totalmente adaptado para uma experiência perfeita em desktops, tablets e celulares.
-   **Modo Escuro:** Suporte automático para o modo escuro, respeitando a preferência do sistema operacional do usuário.
-   **Rádio Indoor & Anúncios:** Páginas dedicadas para empresas que desejam anunciar ou contratar o serviço de rádio personalizada.

### Painel Administrativo (`/admin`)

-   **Dashboard Central:** Visão geral com KPIs (Key Performance Indicators) como número de ouvintes, música atual, e estatísticas de audiência, tudo conectado à API de streaming.
-   **Controle de Transmissão:** Monitoramento do status do servidor, dados de conexão, e listeners por região.
-   **Gestão de Conteúdo:**
    -   **Músicas:** Biblioteca de áudio completa com upload, busca, filtros por gênero e edição de faixas.
    -   **Programação:** Grade semanal interativa para gerenciar programas, horários e locutores.
    -   **Notícias:** Criação e gerenciamento de posts para o blog da rádio.
-   **Moderação:** Ferramentas para gerenciar o Chat ao Vivo, incluindo banimento de usuários e filtro de spam.
-   **Gestão Comercial:** Cadastro e gerenciamento de anunciantes e da equipe de locutores.
-   **Assistente de IA:** Uma ferramenta integrada (`/ai-assistant`) que usa IA generativa (Genkit) para sugerir e otimizar a grade de programação com base em dados históricos e diretrizes da estação.

### Painel Indoor (`/radio-indoor/painel`)

-   **Tela Cheia Otimizada:** Projetada para ser exibida em TVs e monitores em estabelecimentos comerciais.
-   **Anúncios em Slideshow:** Exibição rotativa de anúncios e promoções personalizadas para o ambiente.
-   **Informações em Tempo Real:** Mostra a música tocando, playlist, hora certa e saudação.
-   **Operação Independente:** Funciona como uma aplicação separada, liberada após a contratação do serviço.

## 🚀 Tecnologias Utilizadas

-   **Framework:** [Next.js](https://nextjs.org/) (com App Router)
-   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [ShadCN/UI](https://ui.shadcn.com/)
-   **Inteligência Artificial:** [Genkit](https://firebase.google.com/docs/genkit) (com Google Gemini)
-   **Ícones:** [Lucide React](https://lucide.dev/)

## ⚙️ Como Executar o Projeto

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Configure as variáveis de ambiente:**
    Renomeie o arquivo `.env.example` para `.env` e preencha as URLs da API de streaming e da URL do player.

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:9002`.

## 📂 Estrutura do Projeto

```
/
├── public/                  # Arquivos estáticos (imagens, fontes, ícones)
├── src/
│   ├── app/                 # Rotas da aplicação (App Router)
│   │   ├── admin/           # Código do Painel Administrativo
│   │   ├── ai-assistant/    # Página do assistente de IA
│   │   ├── radio-indoor/    # Página da Rádio Indoor e seu painel
│   │   └── layout.tsx       # Layout principal da aplicação
│   ├── components/          # Componentes React
│   │   ├── anuncie/         # Componentes da pág. "Anuncie"
│   │   ├── home/            # Componentes da pág. "Home"
│   │   ├── radio-indoor/    # Componentes da pág. "Rádio Indoor"
│   │   └── ...              # Outros componentes (shared, ui, etc.)
│   ├── ai/                  # Lógica de IA com Genkit
│   └── lib/                 # Funções utilitárias, dados, etc.
├── .env                     # Variáveis de ambiente (locais)
├── .env.example             # Exemplo de variáveis de ambiente
├── package.json
└── tailwind.config.ts
```

---

Este projeto foi desenvolvido para ser uma solução robusta e escalável para web rádios, combinando uma interface agradável para o usuário final com ferramentas de gerenciamento poderosas para a equipe interna.
