import pg from 'pg'
import { Film } from '../types/film'

const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dvdrental',
    password: 'postgres',
    port: 5432,
})

async function getFilmList(): Promise<[Film]> {
    const response = await pool.query(`SELECT * FROM film`)
    return response.rows
}

// const list = await getFilmList()
// console.log('getFilmList ->', list)

export const resolvers = {
    Query: {
        numberSix() {
            return 6
        },
        numberSeven() {
            return 7
        },
        filmList: () => getFilmList(),
    },
}
