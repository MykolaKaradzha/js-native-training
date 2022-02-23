import {userObj, users} from "./08";

beforeEach( ()=> {

})

test('should select corresponding users from obj', () => {
    expect(userObj[0]).toBe('Mykola');
    expect(userObj[1]).toBe('Nastya');
    expect(userObj[2]).toBe('Lobster');
    expect(userObj[3]).toBe('Barney');
    expect(users[100500].name).toBe('Lola')
})