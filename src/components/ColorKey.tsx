import { Badge, Stack } from "@chakra-ui/react";
import { UsedPlate } from "../hooks/useData";

interface Props {
  plates: UsedPlate[] | undefined;
}

const ColorKey = ({ plates }: Props) => {
  return (
    <Stack direction="row">
      {plates &&
        plates.map((plate) => (
          <>
            {plate.count > 0 && plate.weight == 45 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#3295fd"
                fontSize={20}
                borderRadius="lg"
              >
                45
              </Badge>
            )}{" "}
            {plate.count > 0 && plate.weight == 35 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#faf947"
                fontSize={20}
                borderRadius="lg"
              >
                35
              </Badge>
            )}
            {plate.count > 0 && plate.weight == 25 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#1fb665"
                fontSize={20}
                borderRadius="lg"
              >
                25
              </Badge>
            )}
            {plate.count > 0 && plate.weight == 15 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#7563d9"
                fontSize={20}
                borderRadius="lg"
              >
                15
              </Badge>
            )}
            {plate.count > 0 && plate.weight == 10 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="white"
                fontSize={20}
                borderRadius="lg"
              >
                10
              </Badge>
            )}
            {plate.count > 0 && plate.weight == 5 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#dfdedc"
                fontSize={20}
                borderRadius="lg"
              >
                5
              </Badge>
            )}
            {plate.count > 0 && plate.weight == 2.5 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#dfdedc"
                fontSize={20}
                borderRadius="lg"
              >
                2.5
              </Badge>
            )}
            {plate.count > 0 && plate.weight == 1.25 && (
              <Badge
                variant="solid"
                color="black"
                backgroundColor="#b6bbc2"
                fontSize={20}
                borderRadius="lg"
              >
                1.25
              </Badge>
            )}
          </>
        ))}
    </Stack>
  );
};

export default ColorKey;
