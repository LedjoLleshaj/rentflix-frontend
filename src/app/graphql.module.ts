import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { HttpClientModule } from '@angular/common/http';
import { LS_AUTH_TOKEN } from './shared/constants';

const uri = 'http://localhost:4000/'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const basic = setContext((operation, context) => ({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  }));

  const link = ApolloLink.from([basic, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
