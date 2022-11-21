/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { User } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function UserProfile(props) {
  const { user, overrides, ...rest } = props;
  const buttonThreeFourFiveOneTwoSixNineEightOnClick = useDataStoreDeleteAction(
    { id: user?.id, model: User, schema: schema }
  );
  return (
    <Flex
      gap="24px"
      direction="column"
      width="368px"
      height="435px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(192,224,254,1)"
      {...rest}
      {...getOverrideProps(overrides, "UserProfile")}
    >
      <Image
        width="96px"
        height="96px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="25px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={user?.name}
        {...getOverrideProps(overrides, "Melinda Marcus")}
      ></Text>
      <Button
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onClick={() => {
          buttonThreeFourFiveOneTwoSixNineEightOnClick();
        }}
        {...getOverrideProps(overrides, "Button34512698")}
      ></Button>
      <Button
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        {...getOverrideProps(overrides, "Button34512692")}
      ></Button>
      <Button
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Profile"
        {...getOverrideProps(overrides, "Button29766907")}
      ></Button>
    </Flex>
  );
}
