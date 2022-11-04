const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/autores", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Conectado a DB"))
    .catch(err => console.log("Error al conectarce a la DB", err)); 