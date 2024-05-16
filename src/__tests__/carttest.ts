import Cart from "../Cart";

test('new cart should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
})

test('added new cart', () => {
    const cart = new Cart();
    const item1 = {
        id: 1,
        name: 'Test',
        price: 300
    };

    cart.add(item1);

    expect(cart.items).toEqual([item1]);
})

test('amount calculate correctly', () => {
    const cart = new Cart();
    const item1 = {
        id: 1,
        name: 'Apple',
        price: 200
    };
    const item2 = {
        id: 2,
        name: 'Orange',
        price: 300
    };

    cart.add(item1);
    cart.add(item2);

    expect(cart.amount()).toBe(500);
})

test('amount with discount calculate correctly', () => {
    const cart = new Cart();
    const item1 = {
        id: 1,
        name: 'Apple',
        price: 200
    };
    const item2 = {
        id: 2,
        name: 'Orange',
        price: 300
    };

    cart.add(item1);
    cart.add(item2);

    expect(cart.amountWithDiscount(10)).toBe(450);
})

test('function deleteItem works correctly', () => {
    const cart = new Cart();
    const item1 = {
        id: 1,
        name: 'Apple',
        price: 200
    };
    const item2 = {
        id: 2,
        name: 'Orange',
        price: 300
    };

    cart.add(item1);
    cart.add(item2);

    expect(cart.deleteItem(1)).toBe(true);
})

test('function deleteItem works correctl with non-existent id', () => {
    const cart = new Cart();
    const item1 = {
        id: 1,
        name: 'Apple',
        price: 200
    };
    const item2 = {
        id: 2,
        name: 'Orange',
        price: 300
    };

    cart.add(item1);
    cart.add(item2);

    expect(cart.deleteItem(5)).toBe(false);
})