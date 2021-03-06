module.exports = (sequelize, dataTypes) => {
  let alias = 'movie'; // esto debería estar en singular
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      title: {
          type: dataTypes.STRING(500),
          allowNull: false
      },
      rating: {
          type: dataTypes.DECIMAL(3, 1).UNSIGNED,
          allowNull: false
      },
      awards: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          allowNull: false
      },
      release_date: {
          type: dataTypes.DATEONLY,
          allowNull: false
      },
      length: dataTypes.BIGINT(10),
      genre_id: dataTypes.BIGINT(10)
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const movie = sequelize.define(alias,cols,config);

  movie.associate = function (models) {
      movie.belongsTo(models.genre, { // models.Genres -> Genres es el valor de alias en genres.js
          as: "genre",
          foreignKey: "genre_id"
      })

      movie.belongsToMany(models.actor, { // models.Actors -> Actors es el valor de alias en actor.js
          as: "actors",
          through: 'actor_movie',
          foreignKey: 'movie_id',
          otherKey: 'actor_id',
          timestamps: false
      })
  }


  return movie
};