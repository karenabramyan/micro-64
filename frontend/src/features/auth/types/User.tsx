export default interface User {
    id: number,
    login: string,
    phone: string,
    email: string,
    role: string
}
export type UserId = User['id'];