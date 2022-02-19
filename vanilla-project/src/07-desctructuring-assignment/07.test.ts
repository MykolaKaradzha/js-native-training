import {ManType} from "./07";

let props: ManType;
beforeEach(() => {
        props = {
            name: "Mykola",
            age: 27,
            lessons: [{title: "1"}, {title: "2"}, {title: "3", name:"math"}],
            address: {
                street: {
                    title: "French Blvrd"
                }
            }
        }
    }
)

test('', () => {
    const {age, lessons, address: {street: {title}}} = props
    const {age: a, lessons: l} = props
    expect(age).toBe(27)
    expect(lessons.length).toBe(3)
    expect(title).toBe("French Blvrd")

    expect(a).toBe(27)
    expect(l.length).toBe(3)
})

test('arrays', ()=> {
    const [,, l3] = props.lessons
    const [l1] = props.lessons
    const [,l2, ...restLessons] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    expect(l3.title).toBe("3")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
    expect(restLessons[0]).toStrictEqual({title:"3", name:"math"})

})
