import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo as ApolloWrapper } from "next-apollo";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3005/graphql",
  cache: new InMemoryCache(),
});

export const withApollo = ApolloWrapper(apolloClient);
