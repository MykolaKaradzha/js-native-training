type cityType = {
    title: string;
    countryTitle: string;
}
type addressType = {
    city: cityType
    street: string
}
type TechType = {
    id: number
    name: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    Technologies: Array<TechType>
}



export const student: StudentType = {
    id: 1,
    name: "Mykola",
    age: 28,
    isActive: false,
    address: {
        city: {
                title: "Odessa",
                countryTitle: "Ukraine"
            },
        street: "French Blvd"
        },
    Technologies: [
        {id: 1,
        name: "HTML"
        },
        {id: 2,
        name: "CSS"
        },
        {id: 3,
        name: "JS"
        }
    ]
}
