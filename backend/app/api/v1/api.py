from api.v1.endpoints import calculate
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(calculate.router, tags=["calculate"])
