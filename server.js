// Import Config Modules
const app = require("./config/express");
const mongoose = require("./config/mongoose");
const path = require("path");

// Connect to MongoDB
const db = mongoose();


// PORT get from Heroku
const PORT = process.env.PORT || 8080;
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging")
{
    app.get("*", (req, res) =>
    {
         res.sendFile(path.join(__dirname, "client", "build", "index.html"));
     });
}

app.listen(PORT, () => 
{
    console.log(`The back-end server is running on ${PORT}`);
})