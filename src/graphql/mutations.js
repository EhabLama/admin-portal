/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
export const createCars = /* GraphQL */ `
  mutation CreateCars(
    $input: CreateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    createCars(input: $input, condition: $condition) {
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
export const updateCars = /* GraphQL */ `
  mutation UpdateCars(
    $input: UpdateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    updateCars(input: $input, condition: $condition) {
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
export const deleteCars = /* GraphQL */ `
  mutation DeleteCars(
    $input: DeleteCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    deleteCars(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
