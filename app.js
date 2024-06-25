const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/wallets", function (req, res) {
    setTimeout(function() {
        res.sendFile(__dirname + "/MockResponses/mockWallets.json");
    }, 3000);
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});