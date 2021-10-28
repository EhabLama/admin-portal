/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing {
    onCreateListing {
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
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing {
    onUpdateListing {
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
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing {
    onDeleteListing {
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
export const onCreateCars = /* GraphQL */ `
  subscription OnCreateCars {
    onCreateCars {
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
export const onUpdateCars = /* GraphQL */ `
  subscription OnUpdateCars {
    onUpdateCars {
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
export const onDeleteCars = /* GraphQL */ `
  subscription OnDeleteCars {
    onDeleteCars {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
