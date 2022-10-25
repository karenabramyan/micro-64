import Item from '../../cards/types/Item';

export default interface OrderData extends Item {
    days: string | number | undefined,
}
