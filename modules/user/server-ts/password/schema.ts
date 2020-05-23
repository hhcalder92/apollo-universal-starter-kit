import gql from 'graphql-tag';

export default gql`
  input LoginUserInput {
    usernameOrEmail: String!
    password: String!
  }

  type Tokens {
    accessToken: String
    refreshToken: String
  }

  type AuthPayload {
    user: User
    tokens: Tokens
  }

  input RegisterUserInput {
    username: String!
    email: String!
    password: String!
  }

  input ForgotPasswordInput {
    email: String!
  }

  input ResetPasswordInput {
    token: String!
    password: String!
    passwordConfirmation: String!
  }

  extend type Mutation {
    # Login user
    login(input: LoginUserInput!): AuthPayload!
    # Forgot password
    forgotPassword(input: ForgotPasswordInput!): String
    # Reset password
    resetPassword(input: ResetPasswordInput!): String
    # Register user
    register(input: RegisterUserInput!): UserPayload!
  }
`;
