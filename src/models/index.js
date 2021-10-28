// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Listing, Cars, Users } = initSchema(schema);

export {
  Listing,
  Cars,
  Users
};