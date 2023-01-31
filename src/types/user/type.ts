import {
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType
} from 'graphql';
import { Task } from '../task/type';

export const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLID
        },
        username: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    }
});

export const Me = new GraphQLObjectType({
    name: 'Me',
    fields: {
        id: {
            type: GraphQLID
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLString
        },
        taskList: {
            type: new GraphQLList(Task)
        }
    }
});