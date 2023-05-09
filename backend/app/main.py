from api.v1.api import api_router
from fastapi import FastAPI

# create app
app = FastAPI()

# add routers
app.include_router(api_router, prefix="/api")


@app.get("/")
def home():
    return {"message": "home"}
