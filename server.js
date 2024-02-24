const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("server started");
});

app.get("/", (req, res) => {
    res.send({ name: "nishant" , branch:"cse"  });
});
app.get("/api/products", (req, res) => {
    res.send({ name: "iphone 15" , prize: 85000 , rating:4.5 });
});
