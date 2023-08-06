import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import workoutInput from "../AppTypes";
import useCalculate from "../hooks/useCalculate";
import SetCard from "./SetCard";
import PlateCard from "./PlateCard";
import CardContainer from "./CardContainer";

interface Props {
  workout: workoutInput;
}

const CalculatedSets = ({ workout }: Props) => {
  console.log("load");
  const { data, error, isLoading } = useCalculate(workout);

  if (error) return <Text>{error}</Text>;

  if (isLoading) return <Spinner />;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="10px"
      >
        <CardContainer>
          {data && data?.sets.length > 0 && (
            <PlateCard key="plate" plates={data?.used_plates} />
          )}
        </CardContainer>
        {data?.sets.map((set) => (
          <CardContainer>
            <SetCard key={set.count.toString()} set={set} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CalculatedSets;
