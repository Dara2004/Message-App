const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-wykga.mongodb.net/<messageApp>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
