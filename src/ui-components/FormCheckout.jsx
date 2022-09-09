/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { EnvName, experimentEnv, overrides, ...rest } = props;
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
        height="737px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
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
          height="673px"
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
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Info"
              {...getOverrideProps(overrides, "Info")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              width="619px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Name"
              placeholder="Placeholder"
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
              placeholder="Placeholder"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.description}
              {...getOverrideProps(overrides, "Description")}
            ></TextField>
            <SelectField
              display="flex"
              direction="column"
              width="300px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Region"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.region}
              {...getOverrideProps(overrides, "SelectRegion")}
            ></SelectField>
            <SelectField
              display="flex"
              direction="column"
              width="300px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Type"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={experimentEnv?.type}
              {...getOverrideProps(overrides, "SelectType")}
            ></SelectField>
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
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Telemetry Options"
              {...getOverrideProps(overrides, "Telemetry Options")}
            ></Text>
            <CheckboxField
              display="flex"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Traces"
              size="small"
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
              size="small"
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
              size="small"
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
            {...getOverrideProps(overrides, "CreateEnv")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
