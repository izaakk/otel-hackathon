// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ExperimentEnv, Tenant } = initSchema(schema);

export {
  ExperimentEnv,
  Tenant
};