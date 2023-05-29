import which_plates
from fastapi import APIRouter
from api.schemas.plate import PlateRequest, PlateResponse



router = APIRouter()


@router.post("/calculate/", response_model=PlateResponse, tags=["plates"])
async def calculate_plates(plate_request: PlateRequest) -> PlateResponse:
    set_count = 1
    used_plates = {}
    sets = []

    plate_request.available_plates.sort(reverse=True)
    for plates in plate_request.available_plates:
        used_plates[plates] = 0

    for percent in plate_request.percentages:
        # calculate plate weight needed for current percentage
        plate_weight = which_plates.round_num(
            (plate_request.rep_max * percent / 100) - plate_request.bar_weight
        )

        if plate_weight <= 0:
            # TODO error
            print("    Computed weight less than bar weight, try again")
        else:
            # calculate required plates for set
            plates = which_plates.calc_plates(
                plate_weight, plate_request.available_plates
            )
            current_set_plates = []
            for p_weight, p_count in plates.items():
                current_set_plates.append({"weight": p_weight, "count": p_count})
                if used_plates[p_weight] < p_count:
                    used_plates[p_weight] = p_count

            sets.append(
                {
                    "total_weight": round(plate_weight + plate_request.bar_weight),
                    "plate_weight": round(plate_weight),
                    "percentage": percent,
                    "count": set_count,
                    "plates": current_set_plates,
                }
            )

            set_count += 1

    final_plates = []
    for weight, count in used_plates.items():
        final_plates.append({"weight": weight, "count": count})
    result = {"used_plates": final_plates, "sets": sets}
    return result
