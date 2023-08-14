import React from "react";
import {
  Text,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  ListItem,
  UnorderedList,
  Select,
  HStack,
  IconButton,
  Box,
  Image,
  SimpleGrid,
  Container,
  Spacer,
  useCheckboxGroup,
  Card,
  CardBody,
  Wrap,
  CardFooter,
  Heading,
  Center,
} from "@chakra-ui/react";
import workout from "../AppTypes.ts";
import workoutInput from "../AppTypes.ts";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import plate_45 from "../assets/45.webp";
import plate_35 from "../assets/35.webp";
import plate_25 from "../assets/25.webp";
import plate_15 from "../assets/15.webp";
import plate_10 from "../assets/10.webp";
import plate_5 from "../assets/5.webp";
import plate_2_5 from "../assets/2.5.webp";
import plate_1_25 from "../assets/1.25.webp";
import ColorKey from "./ColorKey.tsx";

interface Props {
  workout: workoutInput;
  handleCalculate: ({}: workout) => void;
}

const InputForm = ({ workout, handleCalculate }: Props) => {
  const [currentPercentage, setCurrentPercentage] = React.useState<
    number | undefined | string
  >(undefined);
  const [tempWorkout, setTempWorkout] = React.useState<workoutInput>({
    ...workout,
  });
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [45, 25, 15, 10, 5, 2.5],
  });
  var all_plates = [
    { count: 1, weight: 45 },
    { count: 1, weight: 35 },
    { count: 1, weight: 25 },
    { count: 1, weight: 15 },
    { count: 1, weight: 10 },
    { count: 1, weight: 5 },
    { count: 1, weight: 2.5 },
    { count: 1, weight: 1.25 },
  ];

  return (
    <>
      <SimpleGrid columns={[1, null, 3]} spacing={5} padding="5">
        <Card>
          <Heading size="md" paddingTop="10px">
            <Center>Set Information</Center>
          </Heading>
          <CardBody>
            <HStack paddingTop="15px">
              <Spacer />
              <Text>Barbell Weight</Text>
              <Select defaultValue={45} width="100px">
                <option value={25}>25</option>
                <option value={35}>35</option>
                <option value={45}>45</option>
              </Select>
              <Spacer />
            </HStack>
            <HStack paddingTop="15px">
              <Spacer />
              <Text>One Rep Max</Text>
              <NumberInput
                defaultValue={tempWorkout.barWeight}
                min={tempWorkout.barWeight}
                value={tempWorkout.oneRepMax}
                onChange={(_, valueAsNumber) =>
                  setTempWorkout({ ...tempWorkout, oneRepMax: valueAsNumber })
                }
                width="100px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Spacer />
            </HStack>
            <HStack paddingTop="15px">
              <Text>Add Set (Percentage of 1 Rep Max)</Text>
            </HStack>
            <HStack>
              <Spacer />
              <NumberInput
                step={5}
                min={1}
                max={100}
                value={currentPercentage}
                onChange={(_, valueAsNumber) =>
                  setCurrentPercentage(valueAsNumber)
                }
                width="100px"
              >
                <NumberInputField />
              </NumberInput>
              <Text>%</Text>
              <Spacer />
              <IconButton
                onClick={() => {
                  typeof currentPercentage === "number" &&
                    setTempWorkout({
                      ...tempWorkout,
                      percentages: [
                        ...tempWorkout.percentages,
                        currentPercentage,
                      ],
                    });
                  setCurrentPercentage("");
                }}
                icon={<AddIcon />}
                aria-label="Add to workout"
                colorScheme="green"
                size="sm"
              />
              <IconButton
                onClick={() => {
                  setTempWorkout({
                    ...tempWorkout,
                    percentages: [],
                  });
                }}
                colorScheme="red"
                icon={<DeleteIcon />}
                aria-label="Delete percentages"
                size="sm"
              />
              <Spacer />
            </HStack>
            <HStack padding="15px">
              <Heading size="sm" padding="20px">
                Sets
              </Heading>
              <Spacer />
              <Button
                bg="green"
                onClick={() => {
                  handleCalculate({ ...tempWorkout, availablePlates: value });
                }}
              >
                Calculate
              </Button>
            </HStack>
            <UnorderedList>
              {tempWorkout.percentages.map((p) => (
                <ListItem key={p.toString()}>
                  {p}% - {tempWorkout.oneRepMax * (p / 100)} lbs
                </ListItem>
              ))}
            </UnorderedList>
          </CardBody>
        </Card>
        <Card>
          <Heading size="md" paddingTop="10px">
            <Center>Available Plates</Center>
          </Heading>
          <CardBody>
            <Wrap spacing="15px" justify="center">
              <Checkbox {...getCheckboxProps({ value: 45 })}>
                <Image src={plate_45} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 35 })}>
                {" "}
                <Image src={plate_35} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 25 })}>
                {" "}
                <Image src={plate_25} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 15 })}>
                {" "}
                <Image src={plate_15} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 10 })}>
                {" "}
                <Image src={plate_10} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 5 })}>
                {" "}
                <Image src={plate_5} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 2.5 })}>
                {" "}
                <Image src={plate_2_5} objectFit="scale-down" boxSize="100px" />
              </Checkbox>
              <Checkbox {...getCheckboxProps({ value: 1.25 })}>
                {" "}
                <Image
                  src={plate_1_25}
                  objectFit="scale-down"
                  boxSize="100px"
                />
              </Checkbox>
            </Wrap>
          </CardBody>
          <CardFooter>
            <ColorKey plates={all_plates} />
          </CardFooter>
        </Card>
        <Container centerContent>
          <Box></Box>
        </Container>
        <Container centerContent>
          <Box></Box>
        </Container>
      </SimpleGrid>
    </>
  );
};

export default InputForm;
