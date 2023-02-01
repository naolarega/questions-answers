import {
    GraphQLList,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType
} from 'graphql';
import {
    NumbersInRange,
    SearchResultItem
} from './types/misc';
import {
    Me,
    UserPayload,
    UserDeletePayload
} from './types/user/type';
import {
    Task,
    TaskPayload
} from './types/task/type';
import { ApproachPayload } from './types/approach/type';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            currentTime: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: () => new Date().toISOString()
            },
            numbersInRange: {
                type: new GraphQLNonNull(NumbersInRange),
                resolve: (begin, end) => {
                    let count = 0;
                    let sum = 0;
                    for(let i = begin; i <= end; i++) {
                        sum += i;
                        count++;
                    }
                    return {
                        sum,
                        count
                    };
                }
            },
            taskMainList: {
                type: new GraphQLNonNull(new GraphQLList(Task))
            },
            taskInfo: {
                type: new GraphQLNonNull(Task),
            },
            search: {
                type: SearchResultItem
            },
            me: {
                type: new GraphQLNonNull(Me)
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            userCreate: {
                type: UserPayload
            },
            userLogin: {
                type: UserPayload
            },
            taskCreate: {
                type: new GraphQLNonNull(TaskPayload)
            },
            approachCreate: {
                type: new GraphQLNonNull(ApproachPayload)
            },
            approachVote: {
                type: new GraphQLNonNull(ApproachPayload)
            },
            userDelete: {
                type: new GraphQLNonNull(UserDeletePayload)
            }
        }
    }),
    subscription: new GraphQLObjectType({
        name: 'Subscription',
        fields: {

        }
    })
});

export default schema;