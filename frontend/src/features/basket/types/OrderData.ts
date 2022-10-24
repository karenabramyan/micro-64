import BasketData from './BasketData';

export default interface OrderData extends BasketData {
    days: string | number
}
