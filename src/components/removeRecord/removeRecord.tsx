'use client'
import { removeRecord } from "@/app/actions";
import { Button } from "../Button";
import { CarElement } from "../CarElement";
export function RemoveRecord(props: any) {

	return (
		<div>
			<CarElement data={props.data}/>
			<Button onClick={() => {removeRecord(props.data.id); window.location.reload()}}>Удалить</Button>
		</div>
	)
}