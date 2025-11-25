videos = [
  {
    "id": 1,
    "videoUrl": "https://example.com/video.mp4",
    "title": "Sample Title",
    "tags": ["tag1", "tag2"]
  }
]


async def get_videos():
  return {"videos": videos}

async def add_video(video):
  new_video = {
    "id": len(videos) + 1,
    "videoUrl": video.videoUrl,
    "title": video.title,
    "tags": video.tags
  }
  
  videos.append(new_video)
  
  return new_video

async def get_single_video(video_id: int):
  for video in videos:
    if video["id"] == video_id:
      return video
  return None