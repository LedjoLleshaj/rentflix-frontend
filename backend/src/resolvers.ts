import * as query from './queries.js'
import {AuthForm} from "./types/auth";

// const list = await getFilmList()
// console.log('getFilmList ->', list)

export const resolvers = {
    Query: {
        login: (parent, args:AuthForm) => query.login(args),
        filmList: () => query.getFilmList(),
    },
}
