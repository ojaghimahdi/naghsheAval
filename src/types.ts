export interface IUserEntity {
    name: string
    userName: string
    email: string
    phone: string
    item: number
    status: 'active' | 'not_active' | null
}
export type Tcols = keyof IUserEntity

export interface IUserStore {
    users: IUserEntity[],
    selectedUser: IUserEntity | null
    addUser: (args: { user: IUserEntity }) => void
    updateUser: (args: { user: IUserEntity }) => void
    setSelectUser: (args: { user: IUserEntity | null }) => void


}
export type TCreateUserInputs = {
    name: string
    userName: string
    email: string
    phone: string
    status: 'active' | 'not_active' | "null"
}
export type TFibonacci={
    number:string
}
export type TCollatz={
    number:string
}
export interface IMenu {
    name: string,
    desc: string
}
