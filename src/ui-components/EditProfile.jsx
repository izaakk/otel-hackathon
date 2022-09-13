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
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Tenant } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, Divider, Flex, TextField } from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { profile, tenant, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixSevenTwoSevenOneSixValue,
    setTextFieldThreeFourSixSevenTwoSevenOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveOneTwoSixEightNineValue,
    setTextFieldThreeFourFiveOneTwoSixEightNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveOneTwoSevenOneZeroValue,
    setTextFieldThreeFourFiveOneTwoSevenOneZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixSevenTwoSevenTwoThreeValue,
    setTextFieldThreeFourSixSevenTwoSevenTwoThreeValue,
  ] = useStateMutationAction("");
  const contentOnClick = useDataStoreUpdateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      geo: textFieldThreeFourSixSevenTwoSevenOneSixValue,
      role: textFieldThreeFourFiveOneTwoSixEightNineValue,
      businessunit: textFieldThreeFourFiveOneTwoSevenOneZeroValue,
      email: textFieldThreeFourSixSevenTwoSevenTwoThreeValue,
    },
    id: tenant?.id,
    model: Tenant,
    schema: schema,
  });
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      geo: textFieldThreeFourSixSevenTwoSevenOneSixValue,
      role: textFieldThreeFourFiveOneTwoSixEightNineValue,
      businessunit: textFieldThreeFourFiveOneTwoSevenOneZeroValue,
      email: textFieldThreeFourSixSevenTwoSevenTwoThreeValue,
    },
    id: authAttributes["email"],
    model: Tenant,
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldTwoNineSevenSixSixNineTwoTwoValue === "" &&
      tenant !== undefined &&
      tenant?.name !== undefined
    )
      setTextFieldTwoNineSevenSixSixNineTwoTwoValue(tenant?.name);
  }, [tenant]);
  useEffect(() => {
    if (
      textFieldThreeFourSixSevenTwoSevenOneSixValue === "" &&
      tenant !== undefined &&
      tenant?.geo !== undefined
    )
      setTextFieldThreeFourSixSevenTwoSevenOneSixValue(tenant?.geo);
  }, [tenant]);
  useEffect(() => {
    if (
      textFieldThreeFourFiveOneTwoSixEightNineValue === "" &&
      tenant !== undefined &&
      tenant?.role !== undefined
    )
      setTextFieldThreeFourFiveOneTwoSixEightNineValue(tenant?.role);
  }, [tenant]);
  useEffect(() => {
    if (
      textFieldThreeFourFiveOneTwoSevenOneZeroValue === "" &&
      tenant !== undefined &&
      tenant?.businessunit !== undefined
    )
      setTextFieldThreeFourFiveOneTwoSevenOneZeroValue(tenant?.businessunit);
  }, [tenant]);
  useEffect(() => {
    if (
      textFieldThreeFourSixSevenTwoSevenTwoThreeValue === "" &&
      tenant !== undefined &&
      tenant?.email !== undefined
    )
      setTextFieldThreeFourSixSevenTwoSevenTwoThreeValue(tenant?.email);
  }, [tenant]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="682px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditProfile")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        onClick={() => {
          contentOnClick();
        }}
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="ID"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={tenant?.id}
            {...getOverrideProps(overrides, "TextField34512696")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Location"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixSevenTwoSevenOneSixValue}
            onChange={(event) => {
              setTextFieldThreeFourSixSevenTwoSevenOneSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34672716")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Email"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixSevenTwoSevenTwoThreeValue}
            onChange={(event) => {
              setTextFieldThreeFourSixSevenTwoSevenTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34672723")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Role"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveOneTwoSixEightNineValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveOneTwoSixEightNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34512689")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Buisness Unit"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveOneTwoSevenOneZeroValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveOneTwoSevenOneZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34512710")}
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
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
