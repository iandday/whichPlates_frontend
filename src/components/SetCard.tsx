import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Badge,
  VStack,
  WrapItem,
  Wrap,
  CardFooter,
} from "@chakra-ui/react";
import { Set } from "../hooks/useData";
import plate_45 from "../assets/45.webp";
import plate_35 from "../assets/35.webp";
import plate_25 from "../assets/25.webp";
import plate_15 from "../assets/15.webp";
import plate_10 from "../assets/10.webp";
import plate_5 from "../assets/5.webp";
import plate_2_5 from "../assets/2.5.webp";
import plate_1_25 from "../assets/1.25.webp";
import ColorKey from "./ColorKey";

interface Props {
  set: Set;
}

const SetCard = ({ set }: Props) => {
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md">
          Set {set.count}: {set.percentage}%, {set.total_weight} Pounds
        </Heading>
      </CardHeader>
      <CardBody>
        <Wrap>
          {set.plates.map(
            (plate) =>
              plate.count > 0 && (
                <>
                  <WrapItem>
                    <VStack>
                      {plate.weight == 45 && (
                        <Image
                          src={plate_45}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 35 && (
                        <Image
                          src={plate_35}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 25 && (
                        <Image
                          src={plate_25}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 15 && (
                        <Image
                          src={plate_15}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 10 && (
                        <Image
                          src={plate_10}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 5 && (
                        <Image
                          src={plate_5}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 2.5 && (
                        <Image
                          src={plate_2_5}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      {plate.weight == 1.25 && (
                        <Image
                          src={plate_1_25}
                          objectFit="cover"
                          boxSize="100px"
                        />
                      )}
                      <Badge
                        colorScheme="blue"
                        variant="solid"
                        borderRadius="lg"
                        px={4}
                      >
                        {plate.count}
                      </Badge>
                    </VStack>
                  </WrapItem>
                </>
              )
          )}
        </Wrap>
      </CardBody>
      <CardFooter>
        <ColorKey plates={set.plates} />
      </CardFooter>
    </Card>
  );
};

export default SetCard;
