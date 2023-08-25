const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root030522@cluster0.wtyd2cz.mongodb.net/networkDB');

module.exports = connection;