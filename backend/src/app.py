from fastapi import FastAPI, Request
import time
from .modules.videos import router as videos_app
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

start_time = time.time()

app = FastAPI(
  title="Short Flix API",
  version="1.0.0",
  servers=[
        {
            "url": "https://real-short-flix.vercel.app/api",
            "description": "Short Flix Production API"
        }
    ]
  )

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


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    details = exc.errors()

    first_error = details[0]
    msg = first_error.get("msg", "Invalid value!")
    
    path_parts = first_error.get("loc", [])

    path = ".".join(str(p) for p in path_parts)
    if path:
        msg += f" ({path})"

    return JSONResponse(
        status_code=400,
        content={
            "status": "Bad Request",
            "message": ["Invalid payload!", msg], 
        }
    )
    