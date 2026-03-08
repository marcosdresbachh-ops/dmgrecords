Nome de usuário
marciamachado335_db_user
Senha
s05wpJjWvvK2DRq8
Esconder

Obter a string de conexão

Esses detalhes fornecem as informações necessárias para conectar-se ao seu banco de dados federado com o Power BI Desktop e Server por meio da interface SQL do MongoDB Atlas.

Banco de dados nome 
sample_mflix
mongodb://atlas-sql-69acbd89b0a54355a96d5e26-oyyehy.z.query.mongodb.net/sample_mflix?ssl=true&authSource=admin

Conectando com o driver do MongoDB
1. Selecione seu driver e versão
.
Recomendamos a instalação e utilização da versão mais recente do driver.

Motorista

Versão

2. Instale o driver
.
Execute o seguinte comando na linha de comando.
npm install mongodb

Veja as instruções de instalação do driver MongoDB para Node.js.
3. Adicione sua string de conexão ao código do seu aplicativo
.
Utilize esta string de conexão em sua aplicação.


String de conexão SRV



Veja o exemplo de código completo.

mongodb+srv://marciamachado335_db_user:<db_password>@dmgrecords.6cdrup7.mongodb.net/?appName=dmgrecords

Substitua <db_password> pela senha do usuário do banco de dados marciamachado335_db_user . Certifique-se de que todos os parâmetros de opção estejam codificados em URL . 
RECURSOS exemplo do o exemplo de código completo.

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marciamachado335_db_user:<db_password>@dmgrecords.6cdrup7.mongodb.net/?appName=dmgrecords";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); E LEIA

---

## Asaas API

**API Key:** `$aact_prod_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjAzMzZhNzJiLTkxNWItNDY3Yi1hM2Q5LTU2M2FlODYwZTA1MDo6JGFhY2hfMWJmODJjMDctNDg2OC00Y2M1LWI3YWUtYzE4Yzc5ODg0Nzdl`
**Webhook URL:** `https://webhook.dmgrecords.com.br`
**Webhook Email:** `webhook@dmgrecords.com.br`
**Webhook Token:** `whsec_ura3mPni_FOxgwpXSB7fdbSuMGX1t9jCxbg6uacfc_k`
**Wallet ID:** `bbcb3f26-1c3e-43e3-941b-ebdbf829d1f0`

---

## Supabase

**Project URL:** `https://wlpxaxmhllcfcszktfat.supabase.co`
**Publishable (Anon) Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscHhheG1obGxjZmNzemt0ZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MjU0OTksImV4cCI6MjAzNTAwMTQ5OX0.h_g9n-fJ3iS9W1c3G8JtYlFp8yZk9D9yPq_gY_bX9Cg`