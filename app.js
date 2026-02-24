require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

// importo la rotta
const movieRouter = require("./routers/movies")

// middleware
// pagina not found
const notFound = require("./middlewares/notFound")
// error
const error = require("./middlewares/error")
// cors
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:5173"
}))

// body parser
app.use(express.json());

app.use("/movie", movieRouter)

app.get("/", (req, res) => {
    res.send("il server è attivo")
})

// middleware PAGINA NN TROVATA
app.use(notFound)

// middleware di ERRORE
app.use(error)

app.listen(port, () => {
    console.log(`il server è OK!${port}`)
})