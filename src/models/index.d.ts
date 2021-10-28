import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ListingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Listing {
  readonly id: string;
  readonly usersID?: string;
  readonly listingtocar?: Cars;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Listing, ListingMetaData>);
  static copyOf(source: Listing, mutator: (draft: MutableModel<Listing, ListingMetaData>) => MutableModel<Listing, ListingMetaData> | void): Listing;
}

export declare class Cars {
  readonly id: string;
  readonly brand?: string;
  readonly build?: string;
  readonly year?: string;
  readonly color?: string;
  readonly usersID?: string;
  readonly cartolisting?: Listing;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cars, CarsMetaData>);
  static copyOf(source: Cars, mutator: (draft: MutableModel<Cars, CarsMetaData>) => MutableModel<Cars, CarsMetaData> | void): Cars;
}

export declare class Users {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly tag?: string;
  readonly usertocars?: (Cars | null)[];
  readonly usertolistings?: (Listing | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}