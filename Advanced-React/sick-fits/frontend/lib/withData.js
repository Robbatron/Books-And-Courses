import withApollo from "next-with-apollo"; // HOC that exposes our Apollo Client via a prop
import ApolloClient from "apollo-boost";
import { endpoint } from "../config"; // our Yoga API endpoint

// headers for auth
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    // on each request, include credentials
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
