/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { ExperimentEnv } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FormCheckout from "./FormCheckout";
import { Collection } from "@aws-amplify/ui-react";
export default function EnvironmentsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ExperimentEnv,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "EnvironmentsCollection")}
    >
      {(item, index) => (
        <FormCheckout
          experimentEnv={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FormCheckout>
      )}
    </Collection>
  );
}
