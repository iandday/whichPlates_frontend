
import workoutInput from "../AppTypes";
import useData from "./useData";

const useCalculate = (workout: workoutInput) => 
    useData(
        "/calculate/",
        {
        bar_weight: workout.barWeight,
        available_plates: workout.availablePlates,
        rep_max: workout.oneRepMax,
        percentages: workout.percentages,
        },
        {},
        [workout]
    );

export default useCalculate;