const { Sequelize } = require("sequelize")
const {sequelize} = require("./db")
const { User } = require("./user");


let Board = sequelize.define("board", {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.NUMBER
});

Board.belongsTo(User);
User.hasMany(Board);

module.exports = {
    Board
}


