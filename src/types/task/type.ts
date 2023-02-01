import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType
} from 'graphql';
import {
    User,
    UserError
} from '../user/type';
import { SearchResultItem } from '../misc';
import { Approach } from '../approach/type';

export const Task  = new GraphQLObjectType({
    name: 'Task',
    interfaces: [
        SearchResultItem
    ],
    fields: {
        id: {
            type: GraphQLID
        },
        content: {
            type: GraphQLString
        },
        tags: {
            type: new GraphQLList(GraphQLString)
        },
        approachCount: {
            type: GraphQLInt
        },
        createdAt: {
            type: GraphQLString
        },
        author: {
            type: User
        },
        approachList: {
            type: new GraphQLList(Approach)
        }
    }
});

export const TaskPayload = new GraphQLObjectType({
    name: 'TaskPayload',
    fields: {
        errors: {
            type: new GraphQLList(UserError)
        },
        task: {
            type: new GraphQLNonNull(Task)
        }
    }
});