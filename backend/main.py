import os
import uvicorn
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("PORT", 8000))
IS_DEVELOPMENT = os.getenv("ENVIRONMENT") == "development"

if __name__ == "__main__":
    uvicorn.run("src.app:app", host="0.0.0.0", port=PORT, reload=IS_DEVELOPMENT)
