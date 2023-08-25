const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wtyd2cz.mongodb.net/networkDB`);

module.exports = connection;