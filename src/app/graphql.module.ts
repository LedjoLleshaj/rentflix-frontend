import { NgModule } from "@angular/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { ApolloLink, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { setContext } from "@apollo/client/link/context";
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { LOCAL_STORAGE_KEYS } from "./shared/constants";
import { onError } from "@apollo/client/link/error";
import { AuthApiService } from "./shared/services/auth-api/auth-api.service";
import { Router } from "@angular/router";

const uri = "http://localhost:4000/"; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink, router: Router) {
  const errorLink = onError(({ networkError, operation, forward }) => {
    if (networkError instanceof HttpErrorResponse) {
      if (networkError.status === 401) {
        // Logout with authApiService
        AuthApiService.logout();
        router.navigate(["/login"]);
        return;
      }
    }
    return forward(operation);
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const requiredLinks = ApolloLink.from([authLink, httpLink.create({ uri })]);

  const link = ApolloLink.split(
    // Conditionally apply error link based on operation type
    (operation) => operation.operationName !== "Login",
    errorLink.concat(requiredLinks),
    requiredLinks
  );

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
      deps: [HttpLink, Router],
    },
  ],
})
export class GraphQLModule {}
