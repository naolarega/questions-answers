import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';
import { User } from '../user/type';
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