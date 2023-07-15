import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

interface Props {}

const NavBar = ({}: Props) => {
  return (
    <>
      <Flex>
        <Heading>Which Plates?</Heading>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default NavBar;
