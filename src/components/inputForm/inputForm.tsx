import React from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Text,
  Checkbox,
  CheckboxGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import workout from "../../AppTypes.ts";

interface Props {
  workout: workout;
  setWorkout: ({}: workout) => void;
}

const inputForm = ({ workout, setWorkout }: Props) => {
  const [currentPercentage, setCurrentPercentage] = React.useState<number>(0);

  return (
    <>
      <Text>Barbell Weight</Text>
      <RadioGroup
        onChange={(value) =>
          setWorkout({ ...workout, barWeight: parseInt(value) })
        }
        value={workout.barWeight.toString()}
        defaultValue={workout.barWeight.toString()}
      >
        <Stack direction="row">
          <Radio value="25">25</Radio>
          <Radio value="35">35</Radio>
          <Radio value="45">45</Radio>
        </Stack>
      </RadioGroup>
      <Text>Available Plates</Text>
      <CheckboxGroup
        defaultValue={["45", "35", "25", "15", "10"]}
        onChange={(value) =>
          setWorkout({ ...workout, availablePlates: [...value] })
        }
        value={workout.availablePlates}
      >
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox value="45">45</Checkbox>
          <Checkbox value="35">35</Checkbox>
          <Checkbox value="25">25</Checkbox>
          <Checkbox value="15">15</Checkbox>
          <Checkbox value="10">10</Checkbox>
          <Checkbox value="5">5</Checkbox>
          <Checkbox value="2.5">2.5</Checkbox>
        </Stack>
      </CheckboxGroup>
      <NumberInput
        step={5}
        defaultValue={workout.barWeight}
        min={workout.barWeight}
        onChange={(valueAsString, valueAsNumber) =>
          setWorkout({ ...workout, oneRepMax: valueAsNumber })
        }
        value={workout.oneRepMax}
      >
        One Rep Max
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <NumberInput
        step={5}
        min={1}
        max={100}
        onChange={(valueAsString, valueAsNumber) =>
          setCurrentPercentage(valueAsNumber)
        }
      >
        Add percentage
        <NumberInputField />
      </NumberInput>
      <Button
        onClick={() => {
          setWorkout({
            ...workout,
            percentages: [...workout.percentages, currentPercentage],
          });
        }}
      >
        Add Percentage
      </Button>
      <ul>
        {workout.percentages.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </>
  );
};

export default inputForm;
