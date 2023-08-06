import { Badge, Stack } from "@chakra-ui/react";

const ColorKey = () => {
  return (
    <Stack direction="row">
      <Badge
        variant="solid"
        color="black"
        backgroundColor="#3295fd"
        fontSize={20}
        borderRadius="lg"
      >
        45
      </Badge>

      <Badge
        variant="solid"
        color="black"
        backgroundColor="#faf947"
        fontSize={20}
        borderRadius="lg"
      >
        35
      </Badge>
      <Badge
        variant="solid"
        color="black"
        backgroundColor="#1fb665"
        fontSize={20}
        borderRadius="lg"
      >
        25
      </Badge>
      <Badge
        variant="solid"
        color="black"
        backgroundColor="#7563d9"
        fontSize={20}
        borderRadius="lg"
      >
        15
      </Badge>
      <Badge
        variant="solid"
        color="black"
        backgroundColor="white"
        fontSize={20}
        borderRadius="lg"
      >
        10
      </Badge>
      <Badge
        variant="solid"
        color="black"
        backgroundColor="#dfdedc"
        fontSize={20}
        borderRadius="lg"
      >
        5
      </Badge>
      <Badge
        variant="solid"
        color="black"
        backgroundColor="#dfdedc"
        fontSize={20}
        borderRadius="lg"
      >
        2.5
      </Badge>
      <Badge
        variant="solid"
        color="black"
        backgroundColor="#b6bbc2"
        fontSize={20}
        borderRadius="lg"
      >
        1.25
      </Badge>
    </Stack>
  );
};

export default ColorKey;
