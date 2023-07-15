import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Box, Flex, Spacer } from "@chakra-ui/react";

interface Props {}

const NavBar = ({}: Props) => {
  return (
    <>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default NavBar;
