import { create } from 'zustand'
import { IUserEntity, IUserStore } from '../../../types'

export const useUserStore = create<IUserStore>((set) => ({
    users: [
        { email: "ojaghimahdi@gmail.com", item: 1, name: "mahdi", phone: "09120610652", status: "active", userName: "ojaghimahdi" },
        { email: "ojaghimahdiiii@gmail.com", item: 2, name: "mahdi2", phone: "09120610652", status: "not_active", userName: "ojaghimahdi" },
    ],
    addUser: (args: { user: IUserEntity }) => {
        set((state) => {
            return {
                users: [...state.users, args.user]
            }
        })
    },
    selectedUser: null,
    setSelectUser: (args: { user: IUserEntity | null }) => {
        set((state) => {

            return {
                selectedUser: args.user
            }
        })
    },
    updateUser: (args: { user: IUserEntity }) => {
        const { user } = args
        set((state) => {
            const copyUsers = [...state.users]
            const ix = copyUsers.findIndex(x => x.item === user.item)
            if (ix > -1) {
                copyUsers[ix] = user
            }
            return {
                users: copyUsers
            }
        })
    }

    // addUser: (args:{user:IUserEntity}) => set((state: IUserEntity[]) => ({bears:state.push(args.user)})),
    // addUser: (args:{user:IUserEntity}) => set((state: IUserEntity[]) => ({bears:state.push(args.user)})),
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
}))