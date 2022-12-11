import express from "express"

const app = express()
const port = 3002


app.get("/", (req,res) => {
    res.send("index page")
});
app.get("/index", (req,res) => {
    res.send("index page2")
});

app.listen(port, ()=>{
    console.log(`App running on port -> ${port}`);
});