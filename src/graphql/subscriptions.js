/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing {
    onCreateListing {
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
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing {
    onUpdateListing {
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
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing {
    onDeleteListing {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
