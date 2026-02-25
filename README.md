# dmgrecords

Gravadora e Produtora Musical Oficial do cantor Vini Amaral. Produção, Mixagem, Masterização e Lançamentos Musicais de alta qualidade.

## Como Publicar no seu GitHub

Para enviar este projeto para o seu repositório, abra o terminal na pasta raiz do projeto e execute os seguintes comandos:

```bash
# Iniciar o repositório git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "first commit: Estrutura completa DMG Records"

# Definir a branch principal como main
git branch -M main

# Conectar ao seu repositório remoto (Certifique-se que o repositório existe no seu GitHub)
git remote add origin https://github.com/marcosdresbachh-ops/dmgrecords.git

# Enviar os arquivos
git push -u origin main
```

## Estrutura do Projeto

- `src/app`: Rotas e layouts Next.js.
- `src/components`: Componentes UI reutilizáveis (Shadcn UI).
- `src/ai`: Fluxos Genkit para assistência de marketing.
- `src/app/lib`: Gerenciamento de placeholders e dados.
