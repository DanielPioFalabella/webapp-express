const express = require("express")
const app = express()
const port = process.env.PORT

// middleware
// pagina not found
const notFound = require("./middlewares/notFound")
// error
const error = require("./middlewares/error")

app.get("/", (req, res) => {
    res.send()
})

// middleware PAGINA NN TROVATA
app.use(notFound)

// middleware di ERRORE
app.use(error)

app.listen(port, () => {
    console.log("il server è OK!")
})