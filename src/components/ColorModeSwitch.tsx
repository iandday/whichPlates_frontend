import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <SunIcon />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MoonIcon />
    </HStack>
  );
};

export default ColorModeSwitch;
