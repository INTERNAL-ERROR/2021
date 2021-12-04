const app = require("express")();
const http = require("http").createServer(app);

app.listen(8080, () => {
    console.log("Up!")
})

app.get("/p5.js", (req, res) => {
    res.sendFile(__dirname + "/code/p5/index.js");
})
