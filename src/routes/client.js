import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        allMovies {
          title
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;

// apollo client를 통해서 작성한 쿼리를 uri:localhost:4000으로 보내서 data를 받아온다.
