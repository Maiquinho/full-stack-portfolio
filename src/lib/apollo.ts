import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clqjon5tob50801uh3kro4sea/master',
  cache: new InMemoryCache(),
})
