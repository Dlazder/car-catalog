'use server'

import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { CarElementProps } from '@/components/CarElement'
import { openDB } from './api/sqlite'
const secretKey = process.env.SECRET_KEY
const key = new TextEncoder().encode(secretKey)


export async function login(formData: FormData) {
    const user = {login: formData.get('login'), password: formData.get('password')}
    const expires = new Date(Date.now() + 60*1000 * 60 * 24 * 7)
    const session = await encrypt({user, expires})
    cookies().set('session', session, {expires, httpOnly: true})
}

export async function logout() {
    cookies().set('session', '', {expires: new Date(0)})
}

export async function encrypt(payload: any) {
    return await new SignJWT(payload).setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('7 day from now')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
    const {payload} = await jwtVerify(input, key, {algorithms: ['HS256']})
    return payload
}

export async function isAdmin() {
    let session = cookies().get('session')?.value
    if (!session) return false
    const {user} = await decrypt(session)
    if (user.login === process.env.LOGIN && user.password === process.env.PASSWORD) {
        return true
    } else return false
}

export async function addRecord(data: CarElementProps) {
	const db = await openDB()
	db.run(`INSERT INTO cars (name, year, horsepower) VALUES (?, ?, ?)`, [data.name, data.year, data.horsepower])
}



export async function removeRecord(id: string) {
	const db = await openDB()
	db.run(`DELETE FROM cars WHERE id=?`, [id])
}