/* Funcion para subir(postear) informacion a nuestra DB
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
  const postsCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    //El metodo create() permite subir(post) informacion a la DB
    //Se usa dentro de un try catch ya que puede fallar el proceso y se debe capturar dicho error
    await postsCollection.create("1rs post", {
      title: "My first post",
    });
    return { statusCode: 200 };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
