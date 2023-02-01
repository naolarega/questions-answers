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

export const UserError = new GraphQLObjectType({
    name: 'UserError',
    fields: {
        message: {
            type: GraphQLString
        }
    }
});

export const UserPayload = new GraphQLObjectType({
    name: 'UserPayload',
    fields: {
        errors: {
            type: new GraphQLList(UserError)
        },
        user: {
            type: new GraphQLNonNull(User)
        },
        authToken: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

export const UserDeletePayload = new GraphQLObjectType({
    name: 'UserDeletePayload',
    fields: {
        errors: {
            type: new GraphQLList(UserError)
        },
        deletedUserId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    }
});