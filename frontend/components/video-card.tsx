import { Video } from '@/app/page'
import Image from 'next/image'

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className='group cursor-pointer rounded-lg overflow-hidden bg-secondary border border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/20'>
      {/* Video Thumbnail */}
      <div className='relative aspect-video bg-muted overflow-hidden'>
        <Image
          src='/placeholder.svg'
          alt={video.title}
          fill
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300' />
      </div>

      {/* Card Content */}
      <div className='p-4'>
        <h3 className='font-semibold text-foreground truncate mb-2 group-hover:text-accent transition-colors'>
          {video.title}
        </h3>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-3'>
          {video.tags.map((tag) => (
            <span
              key={tag}
              className='text-xs bg-accent/20 text-accent px-2 py-1 rounded-full uppercase'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
