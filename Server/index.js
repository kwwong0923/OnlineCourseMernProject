// Import Config Modules
const app = require("./config/express");
const mongoose = require("./config/mongoose");

// Connect to MongoDB
const db = mongoose();

const HOST = "localhost";
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => 
{
    console.log(`The back-end server is running on ${HOST}:${PORT}`);
})