import express from "express";
const app = express();
const portaPadrao = 3000;
import config from "./config.js";
import cors from "cors"
import {Professor} from "./db/definitions.js"

app.use(cors())

// const serve = express();
// serve.use("/", express.static("client/dist"))
// serve.listen(8000, () => {
//     console.log(`Frontend aberto aqui: http://localhost:8000`);
// })

// Teste
app.get('/test', async (req, res) => {
    res.json(config);
})

// Abre a aplicação para receber requests
app.listen(config.porta || portaPadrao, async () => {
    // await syncDB;
    const abc = await Professor.create({
        nome: "abc",
        username: "asdfasd",
        password: "asdasds",
        email: "asdasasasd@asdas.com"
    })
    const idk = await Professor.findAll({
        raw: true,
    })
    console.log(idk)

    console.log(`Backend aberto aqui: http://localhost:${config.porta || portaPadrao}`);
})