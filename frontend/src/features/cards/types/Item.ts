export default interface Item {
    id: number,
    title: string,
    category: string,
    img: string,
    type: string,
    price: string,
    capacity?: string,
    range?: string,
    amount?: number,
    description?: string,
}

export type ItemId = Item['id'];
