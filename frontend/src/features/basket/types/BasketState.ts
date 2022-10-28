import ItemInBasket from './ItemInBasket';
import OrderData from './OrderData';

export default interface BasketState {
    basket: OrderData[],
    totalItems: ItemInBasket[],
    sendError?: string,
    addError?: string,
    deleteError?: string,
}
