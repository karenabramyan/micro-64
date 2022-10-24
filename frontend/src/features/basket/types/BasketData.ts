import User from '../../auth/types/User';

export default interface BasketData {
    user: User | undefined,
    itemId: number,
    days: string | number,
}
