import {
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLInterfaceType,
} from 'graphql';

export const NumbersInRange = new GraphQLObjectType({
    name: 'NumbersInRange',
    fields: {
        sum: {
            type: GraphQLInt
        },
        count: {
            type: GraphQLInt
        }
    }
});

export const SearchResultItem = new GraphQLInterfaceType({
    name: 'SearchResultItem',
    fields: {
        id: {
            type: GraphQLID,
        },
        content: {
            type: GraphQLString,
        }
    }
})