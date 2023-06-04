import { gql } from "apollo-angular";

export interface CreateUserQueryResponse {
  login: {
    token: string,
  };
}

export const LOGIN_QUERY = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
