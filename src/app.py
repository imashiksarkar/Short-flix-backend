from fastapi import FastAPI
import time
from .modules.videos import router as videos_app

start_time = time.time()

app = FastAPI()

@app.get("/")
async def home():
  return {"message": "Welcome to the Short-flix!"}

@app.get("/health")
async def health():
  return {
    "status": "OK",
    "message": "Service is healthy.",
    "uptime": time.time() - start_time
  }


app.include_router(videos_app)
