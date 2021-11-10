/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      start_at
      end_at
      day_price
      is_featured
      geolocation
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        start_at
        end_at
        day_price
        is_featured
        geolocation
        userID
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
        start_at
        end_at
        day_price
        is_featured
        geolocation
        userID
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
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      brand
      model
      year
      color
      listed
      car_image
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        model
        year
        color
        listed
        car_image
        userID
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
    $filter: ModelCarFilterInput
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
        model
        year
        color
        listed
        car_image
        userID
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Listings {
        nextToken
        startedAt
      }
      Cars {
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
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
    $filter: ModelUserFilterInput
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
