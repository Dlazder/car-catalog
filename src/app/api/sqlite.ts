// import { sqlite3 } from "sqlite3";
const sqlite3 = require('sqlite3')
import {open} from 'sqlite'

export async function openDB() {
    return open({
        filename: './db.sqlite',
        driver: sqlite3.Database
    })
}