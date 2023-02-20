const { Sequelize } = require('sequelize');
const {sequelize} = require("./db")
const { Board } = require("./board");


let Cheese = sequelize.define("cheese", {
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

const BoardCheese = sequelize.define("board_cheese", {});

Board.belongsToMany(Cheese, { through: BoardCheese });
Cheese.belongsToMany(Board, { through: BoardCheese });


module.exports = {
    Cheese
}

