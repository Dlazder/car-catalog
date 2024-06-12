import { redirect } from "next/navigation";
import { login } from "../actions";
import s from './page.module.scss'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Page() {
    return (
        <main>
            <form className={s.loginForm} action={async (formData: FormData) => {
            'use server';
            await login(formData)
            redirect('/admin')
          }}>
            <Input name='login' placeholder="login" required /><br />
            <Input name='password' type="password" placeholder="Password" required />
            <br />
            <Button stretch type="submit">Login</Button>
          </form>
        </main>
    )
}