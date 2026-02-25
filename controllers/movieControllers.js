const connection = require("./../data/db-movies")

// index
function index(req, res) {
    const sql = "SELECT * FROM movies"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        res.json(results)
    })
}

// show
function show(req, res) {
    const { id } = req.params
    const sqlMovie = "SELECT * FROM movies WHERE id = ?"

    connection.query(sqlMovie, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        if (movieResults.length === 0) return res.status(404).json({ error: "movie not found" })

        // salvo il risultato del film dentro una variabile
        const movie = movieResults[0];

        const sqlReview = "SELECT * FROM reviews WHERE movie_id = ?"

        connection.query(sqlReview, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: "database query failed" })

            res.json({movie, reviewResults});
        })
    })
}

// store
function store(req,res) {
    // recuperare l'ID
    const {id} = req.params

    // recupero le info dal body della request
    const {} = req.body

    // sql
    const sql = "INSERT INTO reviews (name, text, vote, movie_id) VALUE (?,?,?,?)"

    // query
    connection.query(sql, [name, text, vote], (err, results) => {
        if (err) return res.status(500).json({error: "database query failed"})
            res.status(201)
        res.json({message: "review add", id:results.id})
    })
}

module.exports = { index, show, store }