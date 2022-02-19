


type addressType = {
    street: {title: string}
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string, name?: string}>
    address: addressType
}
type PropsType = {
    title: string
    man: ManType
    car: {model:string}
    food: Array<string>
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...restProps}) => {
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
        <div>{restProps.car.model}</div>
        <div>{restProps.food[0]}</div>
    </div>
}

