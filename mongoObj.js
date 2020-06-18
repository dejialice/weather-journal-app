const { MongoClient } = require('mongodb');

class MongoDBInstance{
  constructor(){
    const mongopass = process.env.PASSWORD;
    const username = process.env.USERNAME;
    this.uri = `mongodb+srv://${username}:${mongopass}@cluster0-4f7xb.mongodb.net/<dbname>?retryWrites=true&w=majority`
  }
  //connect to our mongoDB
  async init() {
    const client = await MongoClient.connect(this.uri, { useUnifiedTopology: true });
    const db = client.db('notesApp')
    const userInfo = db.collection('userInfo');
    this.userInfo = userInfo;
    this.db = db;
    console.log('connected to database');
  }
}
module.exports = new MongoDBInstance();
