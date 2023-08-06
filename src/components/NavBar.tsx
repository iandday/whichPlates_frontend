import ColorModeSwitch from "./ColorModeSwitch";
import { Flex, Heading, Spacer } from "@chakra-ui/react";

interface Props {}

const NavBar = ({}: Props) => {
  return (
    <>
      <Flex padding="2">
        <Heading>Which Plates?</Heading>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default NavBar;
