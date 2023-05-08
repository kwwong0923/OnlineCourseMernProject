const mongoose = require("mongoose");

// Connect to MongoDB

module.exports = () => 
{
    const db = mongoose
                    .connect(process.env.MONGODB_URL)
                    .then(() =>
                    {
                        console.log("Connect to MongoDB ATLAS successfully");
                    })
                    .catch((err) =>
                    {
                        console.log("Failed to connect to MongoDB ATLAS");
                        console.log(err);
                    });
    return db;                  
};