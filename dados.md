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