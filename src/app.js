const express = require("express")

const app = express();

app.get("/", (_req, res)=>{
    res.send("<h1>Node app</h1>");
})

app.listen("5000", ()=>{
    console.log("App http://localhost:5000")
})