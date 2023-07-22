import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import InputForm from "./components/inputForm/inputForm";
import React from "react";
import workoutInput from "./AppTypes.ts";

function App() {
  const [workout, setWorkout] = React.useState<workoutInput>({
    barWeight: 45,
    availablePlates: [],
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
          Main
          <InputForm workout={workout} setWorkout={setWorkout} />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
