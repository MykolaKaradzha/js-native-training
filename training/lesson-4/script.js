todolistID1 = '53443-fgagf';
todolistID2 = '53443-klkj;';


const todolist = [
    {
        id: todolistID1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todolistID2,
        title: 'What to learn',
        filter: 'all',
    }
]

const tasks = {
    [todolistID1]:[
        {title: 'Html', isDone: true},
        {title: 'Html', isDone: true}
    ],
        [todolistID2]:[
        {title: 'jlkjlk', isDone: true},
        {title: 'j;lkl', isDone: false}
    ]
}

 const propName = "age";
const a = {
    "name": "Ted",
    [propName]: 45,
    [10 + 5]: 'heyy',
    'user name' : "Bob"
}





// reduce
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const arr = [1,2,3,4,5,6]
console.log(arr.reduce((sum, el) => sum + el), 0)
console.log(arr.reduce((max, el) => max > el ? max : el))

console.log(students.reduce((acc, student) => acc + student.scores, 0))
console.log(students.reduce((acc, student) => {
    acc = `${acc} ${student.name}`
    return acc
}, ''))
console.log(students.reduce((acc, student) => !student.isMarried ? [...acc, student] : acc, []))

//{"Bob": 85, "Alex": 98}
console.log(students.reduce((newObj, el) => {
    newObj[el.name] = el.scores;
    return newObj;
}, {}))

