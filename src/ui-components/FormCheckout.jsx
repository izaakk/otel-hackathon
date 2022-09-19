/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { ExperimentEnv } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  TextField,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { EnvName, experimentEnv, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [nameValue, setNameValue] = useStateMutationAction("");
  const [descriptionValue, setDescriptionValue] = useStateMutationAction("");
  const [typeValue, setTypeValue] = useStateMutationAction("");
  const [regionValue, setRegionValue] = useStateMutationAction("");
  const [metricsChecked, setMetricsChecked] = useStateMutationAction(false);
  const [tracesChecked, setTracesChecked] = useStateMutationAction(false);
  const [logsChecked, setLogsChecked] = useStateMutationAction(false);
  const createEnvOnClick = useDataStoreCreateAction({
    fields: {
      name: nameValue,
      description: descriptionValue,
      type: typeValue,
      region: regionValue,
      metrics: metricsChecked,
      traces: tracesChecked,
      log: logsChecked,
      tenantID: authAttributes["email"],
    },
    model: ExperimentEnv,
    schema: schema,
  });
  useEffect(() => {
    if (
      nameValue === "" &&
      experimentEnv !== undefined &&
      experimentEnv?.name !== undefined
    )
      setNameValue(experimentEnv?.name);
  }, [experimentEnv]);
  useEffect(() => {
    if (
      descriptionValue === "" &&
      experimentEnv !== undefined &&
      experimentEnv?.description !== undefined
    )
      setDescriptionValue(experimentEnv?.description);
  }, [experimentEnv]);
  useEffect(() => {
    if (
      typeValue === "" &&
      experimentEnv !== undefined &&
      experimentEnv?.type !== undefined
    )
      setTypeValue(experimentEnv?.type);
  }, [experimentEnv]);
  useEffect(() => {
    if (
      regionValue === "" &&
      experimentEnv !== undefined &&
      experimentEnv?.region !== undefined
    )
      setRegionValue(experimentEnv?.region);
  }, [experimentEnv]);
  useEffect(() => {
    if (
      metricsChecked === false &&
      experimentEnv !== undefined &&
      experimentEnv?.metrics !== undefined
    )
      setMetricsChecked(experimentEnv?.metrics);
  }, [experimentEnv]);
  useEffect(() => {
    if (
      tracesChecked === false &&
      experimentEnv !== undefined &&
      experimentEnv?.traces !== undefined
    )
      setTracesChecked(experimentEnv?.traces);
  }, [experimentEnv]);
  useEffect(() => {
    if (
      logsChecked === false &&
      experimentEnv !== undefined &&
      experimentEnv?.log !== undefined
    )
      setLogsChecked(experimentEnv?.log);
  }, [experimentEnv]);
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
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
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
              value={descriptionValue}
              onChange={(event) => {
                setDescriptionValue(event.target.value);
              }}
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
              value={regionValue}
              onChange={(event) => {
                setRegionValue(event.target.value);
              }}
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
              value={typeValue}
              onChange={(event) => {
                setTypeValue(event.target.value);
              }}
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
              isDisabled={false}
              labelPosition="end"
              checked={tracesChecked}
              onChange={(event) => {
                setTracesChecked(event.target.checked);
              }}
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
              isDisabled={false}
              labelPosition="end"
              checked={metricsChecked}
              onChange={(event) => {
                setMetricsChecked(event.target.checked);
              }}
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
              isDisabled={false}
              labelPosition="end"
              checked={logsChecked}
              onChange={(event) => {
                setLogsChecked(event.target.checked);
              }}
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
