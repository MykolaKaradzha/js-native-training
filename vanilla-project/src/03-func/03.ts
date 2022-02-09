import {student, StudentType} from "../02-objects/02"

export const addSkill = (student: StudentType, technology: string) => {
    student.Technologies.push(
        {
        id: new Date().getTime(),
        name: "skill"
    })
}