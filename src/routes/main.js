const router = require('express').Router();
const mainController = require('../controllers/mainController');

router.get("/",mainController.movies.index)

router.get("/generos",mainController.genres.index)

router.get("/actores",mainController.actors.index)

router.get("/:id",mainController.movies.show)

router.get("/genero/:id",mainController.genres.show)

router.get("/actor/:id",mainController.actors.show)

module.exports = router