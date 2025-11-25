videos = [
  {
    "id": 1,
    "videoUrl": "https://cdn.pixabay.com/video/2025/10/31/313145_large.mp4",
    "title": "Heaven Nature",
    "tags": ["nature", "outdoor", "heaven"]
  },
  {
    "id": 2,
    "videoUrl": "https://cdn.pixabay.com/video/2025/10/05/308073_large.mp4",
    "title": "Beautiful Bird",
    "tags": ["bird", "nature", "wildlife"]
  },
  {
    "id": 3,
    "videoUrl": "https://cdn.pixabay.com/video/2025/11/07/314643_large.mp4",
    "title": "Beach Sun",
    "tags": ["beach", "sun", "summer"]
  },
  {
    "id": 4,
    "videoUrl": "https://cdn.pixabay.com/video/2025/09/24/306155_large.mp4",
    "title": "Wavey Ocean",
    "tags": ["ocean", "waves", "sea"]
  },
  {
    "id": 5,
    "videoUrl": "https://cdn.pixabay.com/video/2025/09/22/305657_large.mp4",
    "title": "Colorful Forest",
    "tags": ["forest", "colors", "nature"]
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