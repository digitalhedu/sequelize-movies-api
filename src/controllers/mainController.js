const db = require("../database/models/index")
const Movies = db.movie
const Genres = db.genre
const Actors = db.actor
module.exports = {
  movies:{
    index: async (req,res) => res.send(await Movies.findAll({include: ['genre','actors']})),
    show: async (req,res) => res.send(await Movies.findByPk(req.params.id,{include: ['genre','actors']})),

  },
  genres:{
    index: async (req,res) => res.send(await Genres.findAll({include: ['movies']})),
    show: async (req,res) => res.send(await Genres.findByPk(req.params.id,{include: ['movies']})),
  },
  actors:{
    index: async (req,res) => res.send(await Actors.findAll({include: ['movies']})),
    show: async (req,res) => res.send(await Actors.findByPk(req.params.id,{include: ['movies']})),
  }

}