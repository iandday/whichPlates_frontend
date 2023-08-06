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
  VStack,
  SimpleGrid,
  Container,
  Spacer,
  useCheckboxGroup,
} from "@chakra-ui/react";
import workout from "../AppTypes.ts";
import workoutInput from "../AppTypes.ts";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

interface Props {
  workout: workoutInput;
  handleCalculate: ({}: workout) => void;
}

const InputForm = ({ workout, handleCalculate }: Props) => {
  const [currentPercentage, setCurrentPercentage] = React.useState<
    number | undefined
  >(undefined);
  const [tempWorkout, setTempWorkout] = React.useState<workoutInput>({
    ...workout,
  });
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [45, 25, 15, 10, 5, 2.5],
  });

  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing={5} padding="5">
        <Container centerContent>
          <Box>
            <Text>Barbell Weight</Text>
            <Select defaultValue={45} width="100px">
              <option value={25}>25</option>
              <option value={35}>35</option>
              <option value={45}>45</option>
            </Select>
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
          </Box>
        </Container>
        <Container centerContent>
          <Box>
            <Text>Available Plates</Text>
            <VStack>
              <HStack>
                <Checkbox {...getCheckboxProps({ value: 45 })}>45</Checkbox>
                <Spacer />
                <Checkbox {...getCheckboxProps({ value: 35 })}>35</Checkbox>
                <Spacer />
                <Checkbox {...getCheckboxProps({ value: 25 })}>25</Checkbox>
                <Spacer />
              </HStack>
              <HStack>
                <Checkbox {...getCheckboxProps({ value: 15 })}>15</Checkbox>
                <Spacer />
                <Checkbox {...getCheckboxProps({ value: 10 })}>10</Checkbox>
                <Spacer />
                <Checkbox {...getCheckboxProps({ value: 5 })}>5</Checkbox>
                <Spacer />
              </HStack>
              <HStack>
                <Spacer />
                <Checkbox {...getCheckboxProps({ value: 2.5 })}>2.5</Checkbox>
                <Spacer />
                <Checkbox {...getCheckboxProps({ value: 1.25 })}>1.25</Checkbox>
                <Spacer />
              </HStack>
            </VStack>
          </Box>
        </Container>
        <Container centerContent>
          <Box>
            <Text>Add Percentage (Set)</Text>
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
              <Spacer />
            </HStack>
            <HStack padding="5px">
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
                  setCurrentPercentage(undefined);
                }}
                icon={<AddIcon />}
                aria-label="Add to workout"
                colorScheme="green"
                size="sm"
              />
              <Spacer />
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
          </Box>
        </Container>
        <Container centerContent>
          <Box>
            <Text>Workout Percentages</Text>
            <UnorderedList>
              {tempWorkout.percentages.map((p) => (
                <ListItem>{p}</ListItem>
              ))}
            </UnorderedList>
            <Button
              bg="green"
              onClick={() => {
                handleCalculate({ ...tempWorkout, availablePlates: value });
              }}
            >
              Calculate
            </Button>
          </Box>
        </Container>
      </SimpleGrid>
    </>
  );
};

export default InputForm;
