module.exports = (sequelize, dataTypes) => {
  let alias = 'actor';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      first_name: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
      last_name: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
      rating: {
          type: dataTypes.DECIMAL(3,1),
          allowNull: false
      },
      favorite_movie_id: dataTypes.BIGINT(10).UNSIGNED
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const actor = sequelize.define(alias, cols, config); 

  actor.associate = function (models) {
      actor.belongsToMany(models.movie, { // models.Movies -> Movies es el valor de alias en movie.js
          as: "movies",
          through: 'actor_movie',
          foreignKey: 'actor_id',
          otherKey: 'movie_id',
          timestamps: false
      })
  }

  return actor
};
