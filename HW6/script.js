'use strict'

const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

calculateStudentAverageMark(students[2]);
calculateGroupAverageMark(students);

function calculateStudentAverageMark(student) {
    const sum = student.marks.reduce((acc, item) => acc + item);
    return sum / student.marks.length
}

function calculateGroupAverageMark(students) {
    let newArr = [];
    for (let i = 0; i < students.length; i++) {
        newArr = students[i].marks.concat(newArr);
    }
    const sum = newArr.reduce((acc, item) => acc + item);
    return sum / newArr.length
}