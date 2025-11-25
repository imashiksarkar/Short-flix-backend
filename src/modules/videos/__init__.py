from fastapi import APIRouter, HTTPException
from . import videos_service as vs
from pydantic import BaseModel
from typing import List

class VideoCreate(BaseModel):
    title: str
    videoUrl: str
    tags: List[str] = []

router = APIRouter()

@router.get("/shorts")
async def get_videos():
    return await vs.get_videos()
  
@router.post("/shorts")
async def add_video(video: VideoCreate):
    return await vs.add_video(video)
  
@router.get("/shorts/{video_id}")
async def get_single_video(video_id: int):
  video = await vs.get_single_video(video_id)
  
  if video is None:
    raise HTTPException(status_code=404, detail="Video not found!")
  
  return video