const express = require("express")
const router = express.Router()

// import movieControllers
const movieControllers = require("./../controllers/movieControllers")

// index
router.get("/", movieControllers.index)

// show
router.get("/:id", movieControllers.show)

// store
router.post("/:id/reviews", movieControllers.store)

// update

// modify

// destroy

module.exports = router;