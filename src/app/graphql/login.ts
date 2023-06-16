import { gql } from "apollo-angular";

export interface CreateUserQueryResponse {
  login: {
    token: string;
    first_name: string;
    last_name: string;
  };
}

export const LOGIN_QUERY = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      first_name
      last_name
    }
  }
`;
