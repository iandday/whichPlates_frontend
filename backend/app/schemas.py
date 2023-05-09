from pydantic import BaseModel, conlist


class PlateRequest(BaseModel):
    bar_weight: int
    rep_max: int
    available_plates: conlist(float)
    percentages: conlist(int)


class Plate(BaseModel):
    weight: float
    count: int


class Set(BaseModel):
    total_weight: float
    plate_weight: float
    percentage: int
    count: int
    plates: list[Plate]


class PlateResponse(BaseModel):
    used_plates: list[Plate]
    sets: list[Set]
