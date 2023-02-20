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

    test('can associate multiple Boards with a User', async () => {
        const newUser = await User.create({
            name: "linda tomas",
            email: "lindatomas1@gmail.com"
        });

        const board1 = await Board.create({
            type: "plastic",
            description: "A cheap and lightweight cheese board.",
            rating: 3
        });

        const board2 = await Board.create({
            type: "marble",
            description: "A high-quality, durable cheese board.",
            rating: 5
        });

        await newUser.addBoard(board1);
        await newUser.addBoard(board2);

        const boards = await newUser.getBoards();
        expect(boards).toHaveLength(2);
    });

    test('can associate a Board with multiple Cheeses', async () => {
        const board = await Board.create({
            type: "marble",
            description: "A high-quality, durable cheese board.",
            rating: 5
        });

        const cheese1 = await Cheese.create({
            title: "gouda cheese",
            description: "cheese imported from the netherlands, rich flavour cheese no processing. expires tomorrow!"
        });

        const cheese2 = await Cheese.create({
            title: "cheddar cheese",
            description: "classic cheese with a sharp, tangy flavor."
        });

        await board.addCheese(cheese1);
        await board.addCheese(cheese2);

        const cheeses = await board.getCheeses();
        expect(cheeses).toHaveLength(2);
    });

    test('can load a board with its cheeses', async () => {
        const board = await Board.create({
            type: "marble",
            description: "A high-quality, durable cheese board.",
            rating: 5
        });

        const cheese1 = await Cheese.create({
            title: "gouda cheese",
            description: "cheese imported from the netherlands, rich flavour cheese no processing. expires tomorrow!"
        });

        const cheese2 = await Cheese.create({
            title: "cheddar cheese",
            description: "classic cheese with a sharp, tangy flavor."
        });
    })
})
