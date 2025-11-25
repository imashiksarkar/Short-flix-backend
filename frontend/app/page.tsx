import { headers } from 'next/headers'
import Header from '@/components/header'
import VideoGrid from '@/components/video-grid'

export interface Video {
  id: number
  videoUrl: string
  title: string
  tags: string[]
}

export default async function Home() {
  const baseUrl = 'https://real-short-flix.vercel.app'
  const res = await fetch(`${baseUrl}/api/shorts`, {
    cache: 'no-store',
  })
  const { videos }: { videos: Video[] } = await res.json()

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
