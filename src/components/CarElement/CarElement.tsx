import s from './CarElement.module.scss'

export interface CarElementProps {
    name: string
    year: string
}


export function CarElement(props: {data: CarElementProps}) {

    return (
        <div className={s.carElement}>
            <span>{props.data.name}</span>
            <br />
            <span>{props.data.year}</span>
        </div>
    )
}