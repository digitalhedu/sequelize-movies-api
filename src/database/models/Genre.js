module.exports = (sequelize, dataTypes) => {
    let alias = 'genre'; // esto debería estar en singular

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
  const genre = sequelize.define(alias,cols,config);

  genre.associate = function (models) {
    genre.hasMany(models.movie, { // models.Genres -> Genres es el valor de alias en genres.js
          as: "movies",
          foreignKey: "genre_id"
      })
  }

  return genre
};