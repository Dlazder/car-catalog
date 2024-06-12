import Link from "next/link";
import s from './Header.module.scss'


export function Header() {
    return (
        <header className={s.header}>
            <nav>
                <Link href='/'>Main</Link>
                <Link href='/admin'>Admin</Link>
            </nav>
        </header>
    )
}