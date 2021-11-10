/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
