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
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
//создание нового массива
const names = []
//перебор исходного массива:
for (let i = 0; i < students.length; i++) {
    // получение данных из каждого элемента исходного массива
    const name = students[i].name;
    // добавление данных в новый массив
    names[i] = name;
}
console.log(names)

// isStudent: true
//создание нового массива
const trueStudents = []
//перебор исходного массива:
for (let i = 0; i < students.length; i++) {
    // получение данных из каждого элемента исходного массива
    const trueStudent = {...students[i], isStudent: true}
    // добавление данных в новый массив
    trueStudents[i] = trueStudent;
}

console.log(trueStudents)

function myMap(arr, callback) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        // получение данных из каждого элемента исходного массива
        const newData = callback(arr[i]);
        // добавление данных в новый массив
        resultArray[i] = newData
    }
    return resultArray;
}

console.log(myMap(students, s => s.name))
console.log(myMap(students, s => ({...s, isStudent: true})))
console.log(students.map(s=> s.name))
console.log(students.map(s => ({...s, isStudent: true})))

function myFilter(arr, callback) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            resultArray.push(arr[i])
        }
    }
    return resultArray;
}

console.log(myFilter(students, s=> s.scores >= 100))
console.log(students.filter(s=> s.scores >= 100))

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}

console.log(myFind(students, s => s.name === "Bob"))
console.log(students.find( s => s.name === "Bob"))
const CallBack = (s) =>({...s, isStudent: true})
console.log(myMap(students, CallBack))