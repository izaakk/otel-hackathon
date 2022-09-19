/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Features4x1 from "./Features4x1";
import { Flex } from "@aws-amplify/ui-react";
export default function EnvDash(props) {
  const { EnvEntry, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "EnvDash")}
    >
      <Features4x1
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="40px 140px 40px 140px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Features4x1")}
      ></Features4x1>
    </Flex>
  );
}
