import { ChangeEvent } from 'react';
import s from './Input.module.scss'

export interface InputProps {
    type?: string
    defaultValue?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    required?: boolean
    name?: string
    className?: string
    hidden?: boolean
}
export function Input({type = 'text', ...props}: InputProps) {
    return (
        <input {...props} className={`${s.input} ${props.hidden ? s.hidden : ''}`} />
    )
}