export type usersProps = {
    [key: string]: {id: number, name: string}
}

export const userObj = {
    '0': 'Mykola',
    '1': 'Nastya',
    '2': 'Lobster',
    '3': 'Barney'
}

export const users:usersProps = {
    '101': {id: 101, name: 'Mykola'},
    '2312312': {id: 2312312, name: 'Nastya'},
    '1212': {id: 1212, name: 'Lobster'},
    '1': {id: 1, name: 'Barney'},
}

export const usersArray = [
    {id: 101, name: 'Mykola'},
    {id: 2312312, name: 'Nastya'},
    {id: 1212, name: 'Lobster'},
    {id: 1, name: 'Barney'},
]

//adding new user
const user = {id: 100500, name: "Lola"}
users[user.id] = user
//deleting user
// delete users[user.id]
// replacing data
// users[user.id].name = 'Lol'

