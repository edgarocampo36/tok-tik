/* Funcion para obtener(get) los posts desde nuestra DB
Utilizamos la dependencia @astrajs/collections para manejar 
de forma sencilla la DB que creamos en Astra.
Usamos la funcion createClient() para crear el cliente que se
comunica con la DB pasandole los datos de conexion de la DB.
Definimos un export.handler para manipular el astraClient
*/

const { createClient } = require("@astrajs/collections");

//Definimos el nombre de la collection que vamos a usar
const collection = "posts";

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  });

  //Define la variable que va a almacenar la collection de posts obtenidos de la DB
  //Crea un acceso directo a las collection del usuario en la keyscape indicada en namespace()
  const postsCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    //El metodo find permite buscar y obtener una collection de datos de la DB
    const res = await postsCollection.find();
    return { statusCode: 200, body: JSON.stringify(res)};
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};