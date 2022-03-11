const names = ['Bob', 'Ted', 'Alex', 'Fred', 'bob', 'alex', "игор", "Юра"]
//console.log(names.sort())  метод мутирует массив
console.log([...names].sort()) //копируем массив, а потом сортируем, для того чтобы избежать мутацию массива
console.log(names)

const numbers = [1, 100, 0, 999, 33, 456, 32, 1111, -2]

console.log([...numbers].sort())
const compareFunc = (a,b) => { //по возрастанию
    if(a.toString().toLowerCase() <= b.toString().toLowerCase()) {
        return -1 // любое число, имеющее отрицательное значение, если менять не надо
    } else {
        return 1 // любое число, имеющее положительное значение, если менять не надо
    }
}
// console.log([...numbers].sort(compareFunc))
console.log([...numbers].sort((a,b) => a - b))
console.log([...numbers]
    .sort((a,b) => b - a)
    .reverse()
)
console.log(names.sort(compareFunc))
// по убыванию
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

console.log([...students].sort((a,b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))
console.log([...students].sort((a,b) => a.age - b.age))

// bubble sort
console.log(numbers)

for (let j = 0; j < numbers.length - 1; j++) {
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            // let temp = numbers[i + 1];
            // numbers[i + 1] = numbers[i];
            // numbers[i] = temp;
            [numbers[i+1], numbers[i] ]= [numbers[i], numbers[i+1]]
        }

    }
}
console.log(numbers)