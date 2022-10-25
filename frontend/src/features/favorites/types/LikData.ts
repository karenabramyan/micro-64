import { UserId } from '../../auth/types/User';
import { ItemId } from '../../cards/types/Item';

export default interface LikData {
    userId: UserId,
    itemId: ItemId,

}
