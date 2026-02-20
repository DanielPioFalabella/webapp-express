const connection = require("./../data/db-movies")

function index(req, res) {
    const sql = "SELECT * FROM movies"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        res.json(results)
    })
}

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

module.exports = { index, show }