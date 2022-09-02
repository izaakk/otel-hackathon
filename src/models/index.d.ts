import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ExperimentEnvMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TenantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ExperimentEnv {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly type: string;
  readonly region: string;
  readonly metrics?: boolean | null;
  readonly traces?: boolean | null;
  readonly log?: boolean | null;
  readonly tenantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ExperimentEnv, ExperimentEnvMetaData>);
  static copyOf(source: ExperimentEnv, mutator: (draft: MutableModel<ExperimentEnv, ExperimentEnvMetaData>) => MutableModel<ExperimentEnv, ExperimentEnvMetaData> | void): ExperimentEnv;
}

export declare class Tenant {
  readonly id: string;
  readonly name: string;
  readonly geo: string;
  readonly role: string;
  readonly businessunit: string;
  readonly experiments?: (ExperimentEnv | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tenant, TenantMetaData>);
  static copyOf(source: Tenant, mutator: (draft: MutableModel<Tenant, TenantMetaData>) => MutableModel<Tenant, TenantMetaData> | void): Tenant;
}