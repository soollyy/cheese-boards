
const {sequelize} = require('./db')
const {User, Board, Cheese} = require('./index')

describe('User, Board, Cheese', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test('can create a User', async () => {
        const newUser = await User.create({
            name: "soliana tesema",
            email: "solianatesema1@gmail.com"
        });
        expect(newUser.name).toBe('soliana tesema');
        expect(newUser.email).toBe('solianatesema1@gmail.com');
    })

    test('can create a Board', async () => {
        const newBoard = await Board.create({
            type: "wood",
            description: "best cheese board in the market! doesnt make your board smell of cheese when you wash it!",
            rating: 5
        });
        expect(newBoard.type).toBe('wood');
        expect(newBoard.description).toBe('best cheese board in the market! doesnt make your board smell of cheese when you wash it!');
        expect(newBoard.rating).toBe(5);
    })

    test('can create a Cheese', async () => {
        const newCheese = await Cheese.create({
            title: "gouda cheese",
            description: "cheese imported from the netherlands, rich flavour cheese no processing. expires tomorrow!"
        });
        expect(newCheese.title).toBe('gouda cheese');
        expect(newCheese.description).toBe('cheese imported from the netherlands, rich flavour cheese no processing. expires tomorrow!');
        })

})