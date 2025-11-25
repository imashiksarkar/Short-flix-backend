import Header from '@/components/header'
import VideoGrid from '@/components/video-grid'

export interface Video {
  id: number
  videoUrl: string
  title: string
  tags: string[]
}

const dummyVideo: Video = {
  id: 1,
  title: 'Amazing Sunset Timelapse',
  videoUrl: '/sunset-timelapse.png',
  tags: ['nature', 'travel', 'beautiful'],
}

export default function Home() {
  const videos: Video[] = Array.from({ length: 8 }, (_, i) => ({
    ...dummyVideo,
    id: i + 1,
  }))

  return (
    <main className='min-h-screen bg-background'>
      <Header />

      <div className='px-4 md:px-8 py-8'>
        {videos.length === 0 && (
          <div className='flex justify-center items-center py-20'>
            <div className='text-lg text-muted-foreground'>No videos found</div>
          </div>
        )}

        {videos.length > 0 && <VideoGrid videos={videos} />}
      </div>
    </main>
  )
}
