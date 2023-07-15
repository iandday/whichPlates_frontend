import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import InputForm from "./components/inputForm/inputForm";

function App() {
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
          <InputForm />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
