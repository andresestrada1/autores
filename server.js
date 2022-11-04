const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json(), express.urlencoded({extended:true}));

app.use(
    cors({
        origin: "http://localhost:3000"
    }),
);

//inicializar base de datos 
require("./server/config/mongoose.config");

//importacion de las rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//ejecuatar el server
app.listen(8000, () => console.log("servidor listo"));