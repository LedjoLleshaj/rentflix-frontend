import { Film } from './types/film'
import { poolDvdRental, poolPostgres } from './services/databases.js'
import * as crypto from "crypto";
import {AuthForm, AuthResponse} from "./types/auth";

export async function login(form: AuthForm): Promise<AuthResponse> {
    // get md5 of password
    const passwordMd5 = crypto.createHash('md5').update(form.password).digest('hex');
    const query = await poolPostgres.query(`SELECT * FROM users WHERE username = '${form.username}' AND password_md5 = '${passwordMd5}'`)
    if(query.rows.length === 0) {
        return {
            token: '',
            result: false
        }
    }
    // todo create valid token
    return {
        token: '1234567890',
        result: true
    }
}

export async function getFilmList(): Promise<[Film]> {
    const response = await poolDvdRental.query(`SELECT * FROM film`)
    return response.rows
}
