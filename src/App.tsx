import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import React from "react";
import workoutInput from "./AppTypes.ts";
import CalculatedSets from "./components/CalculatedSets.tsx";
import Footer from "./components/Footer.tsx";
import InputForm from "./components/inputForm.tsx";

function App() {
  const [workout, setWorkout] = React.useState<workoutInput>({
    barWeight: 45,
    availablePlates: [25, 15, 10],
    oneRepMax: 0,
    percentages: [],
  });

  return (
    <>
      <Grid
        templateAreas={`"header header"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        //color="blackAlpha.700"
        //fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Text fontSize="large">
            Calculate the required plates for each set based off a percentage of
            your one-rep max. Select your barbell weight and available plates,
            then input your one-rep max. Add sets by entering a percentage and
            clicking the addition button. Clicking the delete button will clear
            the workout list.
          </Text>
          <InputForm
            handleCalculate={(newWorkout) => setWorkout(newWorkout)}
            workout={workout}
          />
          <CalculatedSets workout={workout} />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
