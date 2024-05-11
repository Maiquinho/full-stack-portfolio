'use client'

import { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'

import { client } from '@/lib/apollo'

interface UseClientApolloContextType {
  children: ReactNode
}

export function UseClientApolloContextProvider({
  children,
}: UseClientApolloContextType) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
