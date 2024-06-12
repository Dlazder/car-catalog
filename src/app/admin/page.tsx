import { redirect } from 'next/navigation'
import { isAdmin } from '../actions'

import {CreateRecord} from '../../components/CreateRecord'
import s from './page.module.scss'

export default async function AdminPage() {
    const isAllowed = await isAdmin()
    if (!isAllowed) {
        redirect('/login')
    }

    return (
        <main>
            <CreateRecord/>
        </main>
    )
}