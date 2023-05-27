import { Film } from './types/film'
import { pool } from './services/database.js'

export async function getFilmList(): Promise<[Film]> {
    const response = await pool.query(`SELECT * FROM film`)
    return response.rows
}
