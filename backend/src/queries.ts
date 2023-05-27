import pg from 'pg'
import { Film } from './types/film'

const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dvdrental',
    password: 'postgres',
    port: 5432,
})

export async function getFilmList(): Promise<[Film]> {
    const response = await pool.query(`SELECT * FROM film`)
    return response.rows
}
