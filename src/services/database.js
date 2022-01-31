require('dotenv').config();
const { MongoClient } = require('mongodb');
const mongo_client = new MongoClient(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = {
    async connect(database_name) {
        await mongo_client.connect();
        const database = mongo_client.db(database_name);
        const users = database.collection('users');
        const houses = database.collection('houses');

        this.database = database;
        this.users = users;
        this.houses = houses;
    },
    async close() {
        return await mongo_client.close();
    },
};
