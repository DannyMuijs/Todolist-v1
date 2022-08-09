const express = require("express")
const bodyParser = requrie ("body-parser")

const app = express();

app.get ("/", (req, res,) => {
    res.send("hello");

});

app.listen(3000, () =>{
    console.log("server started on port 3000");
});