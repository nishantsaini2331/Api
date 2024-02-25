const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("server started");
});

app.get("/", (req, res) => {
    res.send({ name: "nishant", branch: "cse" });
});
app.get("/api/products", (req, res) => {
    res.send({ name: "iphone 15", prize: 85000, rating: 4.5 });
});

app.use((req, res, next) => {
    console.log("1st");
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    if (req.accepts("json")) {
        res.json({ error: err.message });
        return;
    }
});
