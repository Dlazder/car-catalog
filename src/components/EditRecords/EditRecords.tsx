import { openDB } from "@/app/api/sqlite"
import { Input } from "../Input"

import s from './EditRecords.module.scss'
import { CarElement } from "../CarElement"
import { Button } from "../Button"
import { RemoveRecord } from '../removeRecord/'
export async function EditRecords() {

	const db = await openDB()
	const data = await db.all('SELECT * FROM cars')

	return (
		<div className={s.editRecords}>
			{data.map((e, i) => (
				<div key={i} className={s.record}>
					{/* <CarElement data={e}/>
					<Button>Удалить</Button> */}
					<RemoveRecord data={e}/>
					{/* <Input type="text" placeholder='name' defaultValue={e.name} />
					<Input type="text" placeholder='year' defaultValue={e.year} />
					<Input type="text" placeholder='horsepower' defaultValue={e.horsepower} /> */}
				</div>
			)
			)}
		</div>
	)
}