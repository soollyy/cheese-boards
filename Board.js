const { Sequelize } = require("sequelize")
const {sequelize} = require("./db")

let Board = sequelize.define("board", {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.NUMBER
});

module.exports = {
    Board
}


