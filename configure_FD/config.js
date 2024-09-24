// config/database.js

const { 
    MONGO_IP = "mongo",
    MONGO_PORT = 27017,
    MONGO_USERNAME = "admin",
    MONGO_PASSWORD = "password"
} = process.env;

module.exports = {
    MONGO_IP,
    MONGO_PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD
};
