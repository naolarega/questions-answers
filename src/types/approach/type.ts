import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLObjectType
} from 'graphql';
import {
    User,
    UserError
} from '../user/type';
import { Task  } from '../task/type';
import { SearchResultItem } from '../misc';

const ApproachDetailCategory = new GraphQLEnumType({
    name: 'ApproachDetailCategory',
    values: {
        NOTE: { value: 0 },
        EXPLANATION: { value: 1 },
        WARNING: { value: 2 }
    }
});

const ApproachDetail = new GraphQLObjectType({
    name: 'ApproachDetail',
    fields: {
        content: {
            type: GraphQLString
        },
        category: {
            type: ApproachDetailCategory
        }
    }
});

export const Approach = new GraphQLObjectType({
    name: 'Approach',
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
        voteCount: {
            type: GraphQLInt
        },
        createdAt: {
            type: GraphQLString
        },
        author: {
            type: User
        },
        task: {
            type: Task
        },
        detailList: {
            type: ApproachDetail
        }
    }
});

export const ApproachPayload = new GraphQLObjectType({
    name: 'ApproachPayload',
    fields: {
        errors: {
            type: new GraphQLList(UserError)
        },
        approach: {
            type: new GraphQLNonNull(Approach)
        }
    }
});