export const resolvers = {
    Query: {
        numberSix() {
            return 6;
        },
        numberSeven() {
            return 7;
        },
        filmList(){
            return [{
                film_id: 1,
                title: "title",
                description: "description",
                release_year: 2021,
                language: "language",
                rental_duration: 1,
                rental_rate: 1.0,
                length: 1,
                replacement_cost: 1.0,
                rating: "PG",
                last_update: "last_update",
                special_features: ["special_features"],
                fulltext: "fulltext",
                categories: ["categories"],
                actors: ["actors"],
            }]
        }
    },
};
