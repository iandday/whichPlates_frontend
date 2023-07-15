import React from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Text,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

interface Props {}

const inputForm = ({}: Props) => {
  const [workoutInput, setWorkoutInput] = React.useState<workoutInput>({
    barWeight: "45",
    availablePlates: [],
  });

  return (
    <>
      <Text>Barbell Weight</Text>
      <RadioGroup
        onChange={(value) =>
          setWorkoutInput({ ...workoutInput, barWeight: value })
        }
        value={workoutInput.barWeight}
        defaultValue={workoutInput.barWeight}
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
          setWorkoutInput({ ...workoutInput, availablePlates: [...value] })
        }
        value={workoutInput.availablePlates}
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
    </>
  );
};

export default inputForm;
