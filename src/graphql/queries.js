/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      usersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      listingtocar {
        id
        brand
        build
        year
        color
        usersID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncListings = /* GraphQL */ `
  query SyncListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncListings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCars = /* GraphQL */ `
  query GetCars($id: ID!) {
    getCars(id: $id) {
      id
      brand
      build
      year
      color
      usersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cartolisting {
        id
        usersID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listCarss = /* GraphQL */ `
  query ListCarss(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        build
        year
        color
        usersID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCars = /* GraphQL */ `
  query SyncCars(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        brand
        build
        year
        color
        usersID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      username
      password
      role
      tag
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      usertolistings {
        nextToken
        startedAt
      }
      usertocars {
        nextToken
        startedAt
      }
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        role
        tag
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        password
        role
        tag
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
