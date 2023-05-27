import * as query from './queries.js'

// const list = await getFilmList()
// console.log('getFilmList ->', list)

export const resolvers = {
    Query: {
        filmList: () => query.getFilmList(),
    },
}
