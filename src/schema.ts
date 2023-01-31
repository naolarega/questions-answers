import {
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType
} from 'graphql';
import {
    NumbersInRange,
    SearchResultItem
} from './types/misc';
import { Me } from './types/user/type';
import { Task } from './types/task/type';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            currentTime: {
                type: new GraphQLNonNull(GraphQLString)
            },
            numbersInRange: {
                type: NumbersInRange
            },
            taskMainList: {
                type: Task
            },
            taskInfo: {
                type: Task,
            },
            search: {
                type: SearchResultItem
            },
            me: {
                type: Me
            }
        }
    })
});

export default schema;