import {
    GraphQLID, GraphQLNonNull,
    GraphQLObjectType
} from 'graphql';

const userModel = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    }
});

export default userModel;