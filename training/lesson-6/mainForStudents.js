const students = [
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
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
console.log('1')
console.log(user === copyUser); // false
console.log(user.friends === copyUser.friends); //true

//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
console.log('2')
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
}
console.log(user === deepCopyUser); //false
console.log(user.friends === deepCopyUser.friends); //false
//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];
console.log('3')
console.log(students === copyStudents); //false
console.log(students[0] === copyStudents[0]) //true

//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
console.log('4')
let deepCopyStudents = students.map(student => ({...student}))
console.log(students === deepCopyStudents); //false
console.log(students[0] === deepCopyStudents[0]) //false


//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
console.log('5')
let sortedByName = deepCopyStudents.map(student => ({...student}))
    .sort((a, b) => a.name <= b.name ? -1 : 1);
console.log(sortedByName);


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
console.log("5a");
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
console.log("6");
let bestStudents = deepCopyStudents.filter(student => student.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log("6a");
let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
console.log("6b");
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
let newDeepCopyStudents1 = topStudents.concat(deepCopyStudents);
console.log(newDeepCopyStudents)
console.log(newDeepCopyStudents1)


//7. Сформируйте массив холостых студентов (filter)
console.log("7");
let notMarriedStudents = students.filter(student => !student.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
console.log("8");
let studentsNames = students.reduce((acc, student) => [...acc, student.name], [])
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
console.log("8a");
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(', ');
;
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
console.log("9");
let trueStudents = students.map(student => ({...student, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
console.log("10");
let studentsWithMarriedNick = students.map(student => student.name === 'Nick' ? {
    ...student,
    isMarried: true
} : student);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
console.log("11");
let ann = students.find(student => student.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
console.log("12");
let bestStudent = students.reduce((acc, student) => student.scores > acc.scores ? student : acc);
console.log(bestStudent)
let bestStudent1;
let counter = 0
for (let i = 0; i < students.length - 1; i++) {
    if (students[i].scores > counter) {
        counter = students[i].scores
        bestStudent1 = students[i]
    }
}

console.log(bestStudent1)

// 13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!
console.log("13");
let scoresSum = students.reduce((acc, student) => student.scores + acc, 0);
console.log(scoresSum)
let scoresAlt = 0;
for (let i = 0; i < students.length; i++) {
    scoresAlt += students[i].scores
}
console.log(scoresAlt)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
console.log("14");
const addFriends = (students) => {
    let updatedStudents = [];
    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];
        let friends = students.reduce((acc, student) => {
            if (student.name !== currentStudent.name) {
                acc.push(student.name)
            }
            return acc
        }, [])
        updatedStudents.push({...students[i], friends: friends})
    }
    return updatedStudents;
    //..............................
}
console.log(addFriends(students));

const addFriends1 = (students) => {
    return students.map(el => ({...el, friends: students.filter(st => st.name !== el.name).map(e=>e.name)}))
}
console.log(addFriends1(students));





