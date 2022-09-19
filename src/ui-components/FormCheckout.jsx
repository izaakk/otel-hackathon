/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { ExperimentEnv } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  TextField,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { EnvName, experimentEnv, overrides, ...rest } = props;
  const createEnvOnClick = useDataStoreDeleteAction({
    id: experimentEnv?.id,
    model: ExperimentEnv,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      width="837px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FormCheckout")}
    >
      <Flex
        gap="0"
        width="837px"
        alignItems="flex-start"
        grow="1"
        basis="837px"
        height="658px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        as="form"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="837px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="837px"
          height="594px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <TextField
              display="flex"
              direction="column"
              width="619px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Name"
              placeholder="mySampleEnv"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.name}
              {...getOverrideProps(overrides, "Name")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="619px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Description"
              placeholder="Provide a brief description of your env here"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.description}
              {...getOverrideProps(overrides, "Description")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="619px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Region"
              placeholder="us-west-1, us-west-2, us-east-1, or us-east-2"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.region}
              {...getOverrideProps(overrides, "Region")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="619px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Type"
              placeholder=""
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.type}
              {...getOverrideProps(overrides, "Type")}
            ></TextField>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767011")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <CheckboxField
              display="flex"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Traces"
              size="default"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              checked={experimentEnv?.traces}
              {...getOverrideProps(overrides, "Traces")}
            ></CheckboxField>
            <CheckboxField
              display="flex"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Metrics"
              size="default"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              checked={experimentEnv?.metrics}
              {...getOverrideProps(overrides, "Metrics")}
            ></CheckboxField>
            <CheckboxField
              display="flex"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Logs"
              size="default"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              checked={experimentEnv?.log}
              {...getOverrideProps(overrides, "Logs")}
            ></CheckboxField>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider34482837")}
          ></Divider>
          <Button
            display="flex"
            gap="0"
            width="150px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            backgroundColor="rgba(51,133,255,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Create"
            onClick={() => {
              createEnvOnClick();
            }}
            {...getOverrideProps(overrides, "CreateEnv")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
