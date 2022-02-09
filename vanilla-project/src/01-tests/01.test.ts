import {add, mult, splittingIntoWords} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
    }
)
test("adding should be correct", () => {
    //data
    // new values for variables assigned
    a = 10;
    b = 4;
    c = 5;

    //action
    let result1 = add(a,b)
    let result2 = add(b,c)

    //expected result
    expect(result1).toBe(14)
    expect(result2).toBe(9)
})

test("multiply should be correct", () => {
    //data
    //can be empty if there is beforeEach

    //action
    let result1 = mult(a,b)
    let result2 = mult(b,c)

    //expected result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test("splitting should be correct", () => {
    //data
    let a = "London is the capital of the Great Britain, you know that, right?"
    let b = "Testing is  awesome! !"
    //action
    let result1 = splittingIntoWords(a)
    let result2 = splittingIntoWords(b)

    //expected result
    expect(result1.length).toBe(12)
    expect(result1[0]).toBe("london")
    expect(result1[1]).toBe("is")
    expect(result1[2]).toBe("the")
    expect(result1[3]).toBe("capital")
    expect(result1[4]).toBe("of")
    expect(result1[5]).toBe("the")
    expect(result1[6]).toBe("great")
    expect(result1[7]).toBe("britain")
    expect(result1[8]).toBe("you")
    expect(result1[9]).toBe("know")
    expect(result1[10]).toBe("that")
    expect(result1[11]).toBe("right")
    expect(result2.length).toBe(3)
    expect(result2[0]).toBe("testing")
    expect(result2[1]).toBe("is")
    expect(result2[2]).toBe("awesome")

})