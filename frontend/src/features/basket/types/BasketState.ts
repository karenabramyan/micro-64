import Item from '../../cards/types/Item';
import ItemInBasket from './ItemInBasket';

export default interface BasketState {
    basket: Item[]
    totalItems: ItemInBasket[]
}
