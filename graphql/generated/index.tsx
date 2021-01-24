import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  profilePic: Scalars['String'];
  email: Scalars['String'];
  role: Role;
};

/** The possible roles of a user */
export enum Role {
  Advertiser = 'ADVERTISER',
  User = 'USER'
}

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  companyPic?: Maybe<Scalars['String']>;
  workers: Array<User>;
  owner: User;
};

export type OrganizationResponse = {
  __typename?: 'OrganizationResponse';
  errors?: Maybe<Array<FieldError>>;
  organization?: Maybe<Organization>;
};

export type OrganizationsResponse = {
  __typename?: 'OrganizationsResponse';
  errors?: Maybe<Array<FieldError>>;
  organizations?: Maybe<Array<Organization>>;
};

export type AddToOrgResponse = {
  __typename?: 'AddToOrgResponse';
  errors?: Maybe<Array<FieldError>>;
  worked?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me: UserResponse;
  getAllOrgs: OrganizationsResponse;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createOrganization: OrganizationResponse;
  addToOrg: AddToOrgResponse;
};


export type MutationSignupArgs = {
  signupOptions: SignupDto;
};


export type MutationLoginArgs = {
  loginOptions: LogInDto;
};


export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationDto;
};


export type MutationAddToOrgArgs = {
  addToOrgOptions: AddToOrgDto;
};

export type SignupDto = {
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  profilePic?: Maybe<Scalars['String']>;
};

export type LogInDto = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type CreateOrganizationDto = {
  name: Scalars['String'];
  companyPic?: Maybe<Scalars['String']>;
};

export type AddToOrgDto = {
  userIdToAdd: Scalars['String'];
  orgId: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;