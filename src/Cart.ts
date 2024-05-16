import Buyable from "./domain/Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    amount(): number {
        return this._items.reduce((a: number, b: Buyable): number => a + b.price, 0);
    }

    amountWithDiscount(discount: number): number {
        return this.amount() / 100 * (100 - discount);
    }

    deleteItem(itemId: number): boolean {
        const index: number = this._items.findIndex(item => item.id === itemId);
        if (index === -1) {
            return false;
        } else {
            this._items.splice(index, 1);
            return this._items.findIndex(item => item.id === itemId) === -1;
        }
    }
}
