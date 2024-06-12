import { ReactNode } from 'react'
import s from './Button.module.scss'

export interface ButtonProps {
    children: ReactNode;
    center?: boolean;
    stretch?: boolean;
    onClick?: any;
    type?: string;
}


export function Button(props: ButtonProps) {
    return <button onClick={props.onClick} className={`${s.btn} ${props.center ? s.center : ''} ${props.stretch ? s.stretch : ''}`}>{props.children}</button>
}