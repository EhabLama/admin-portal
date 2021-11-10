import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ListingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Listing {
  readonly id: string;
  readonly start_at?: string;
  readonly end_at?: string;
  readonly day_price?: string;
  readonly is_featured?: boolean;
  readonly geolocation?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Listing, ListingMetaData>);
  static copyOf(source: Listing, mutator: (draft: MutableModel<Listing, ListingMetaData>) => MutableModel<Listing, ListingMetaData> | void): Listing;
}

export declare class Car {
  readonly id: string;
  readonly brand?: string;
  readonly model?: string;
  readonly year?: string;
  readonly color?: string;
  readonly listed?: boolean;
  readonly car_image?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Car, CarMetaData>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car, CarMetaData>) => MutableModel<Car, CarMetaData> | void): Car;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly Cars?: (Car | null)[];
  readonly Listings?: (Listing | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}