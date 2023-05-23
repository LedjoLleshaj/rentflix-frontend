import { GraphQLID, GraphQLNonNull } from 'graphql';
import userModel from "../models/user";

const user = {
    type: userModel,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve(parent: any, args: any) {
        return {
            id: args.id,
        };
    }
}

export default user;