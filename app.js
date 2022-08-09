const express = require("express")
const bodyParser = require ("body-parser")
const date = require(__dirname + "/date.js")


const app = express();

let items = ["Buy food","Cook food","Eat food",];
let workItems  = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))



// getting the date list
app.get ("/", (req, res) => {




res.render("list", {listTitle: day, newListItems: items})
});


// getting the work list 
app.get("/work", (req, res) =>{
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// getting the about page
app.get("/about", (req, res) =>{
    res.render("about")
})



// posting the work list
app.post("/", (req, res) => {
    let item = req.body.newItem;

    if(req.body.list === "Work"){
      workItems.push(item)
      res.redirect("/work");
     
    }
    else{
        items.push(item)
        res.redirect("/");
        console.log("hij is niet aangekomen")
    }
})



// app.post ("/work", (req, res) =>{
//     workItems.push(item);
//     res.redirect("/work");
// })


app.listen(3000, () =>{
    console.log("server started on port 3000");
});