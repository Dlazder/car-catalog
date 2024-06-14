'use client'

import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import s from './CreateRecord.module.scss'
import { addRecord } from "@/app/actions";

export function CreateRecord() {
    
	const [name, setName] = useState(0)
	const [year, setYear] = useState(0)
	const [horsepower, setHorsePower] = useState(0)

	const createRecordHandler = () => {addRecord({name, year, horsepower}); console.log({name, year})}
    return (
        <div className={s.createRecord}>
			<Input onChange={(e: any) => {setName(e.target.value)}} placeholder="name"/>
			<Input onChange={(e: any) => {setYear(e.target.value)}} placeholder="year"/>
			<Input onChange={(e: any) => {setHorsePower(e.target.value)}} placeholder="horse power"/>

            <Button type="submit" onClick={createRecordHandler}>Создать</Button>
        </div>
    )
}