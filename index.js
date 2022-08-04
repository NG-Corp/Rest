const express = require("express");
const app = express();
const PORT = "https://api.github.com/rest1";
const res = require("res");
const req = require("request");
const { createWorker} = require("tesseract.js");
const { text } = require("express");
const fs = require("fs");
const cors = require("cors");

const worker = createWorker();

app.use( express.json() )
app.use(cors({origin: true, credentials: true}));

app.get('/tes', (req,res) => {

    res.status(200).send({
        'tshirt':"ani",
    })
}) 

app.post('/tio', (req, res, err) => {

    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({ message: "We Need A Logo"})
    }

    
        async function nea() {
             await worker.load();
             await worker.loadLanguage('eng');
             await worker.initialize('eng');
             const text  = await worker.recognize(logo);
             var ret = text.data.text.replace('\n',' ');
             await console.log(ret);
             
             await res.send({
                "data":`${ret}`
             });
             await worker.terminate();
     } 

     }

);
app.listen(
    PORT,
    () => console.log(`open localhost`)
)

