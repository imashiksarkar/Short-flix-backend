'use client'

import type React from 'react'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AddShortForm() {
  const serverUrl = 'https://real-short-flix.vercel.app/api'

  const router = useRouter()
  const [videoUrl, setVideoUrl] = useState('')
  const [title, setTitle] = useState('')
  const [tagsInput, setTagsInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    const parsedTags = tagsInput
      .trim()
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
    setTags(parsedTags)
  }, [tagsInput])

  const submitToServer = async () => {
    const payload = { title, videoUrl, tags }

    const res = await fetch(`${serverUrl}/shorts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error('Failed to submit the short video')

    return res.json()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)

    if (!videoUrl.trim() || !title.trim() || tags.length === 0) {
      alert('Please fill in all fields and add at least one tag')
      setIsSubmitting(false)
      return
    }

    await submitToServer()
    setIsSubmitting(false)
    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-card border border-border rounded-lg p-8 space-y-6 m-10'
    >
      {/* Title Input */}
      <div className='space-y-2'>
        <label
          htmlFor='title'
          className='block text-sm font-semibold text-foreground'
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          placeholder='Give your short a catchy title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all'
          maxLength={100}
          required
        />
        <p className='text-xs text-muted-foreground'>
          {title.length}/100 characters
        </p>
      </div>

      {/* Video URL Input */}
      <div className='space-y-2'>
        <label
          htmlFor='videoUrl'
          className='block text-sm font-semibold text-foreground'
        >
          Video URL
        </label>
        <input
          type='url'
          id='videoUrl'
          placeholder='https://example.com/video.mp4'
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className='w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all'
          required
        />
        <p className='text-xs text-muted-foreground'>
          Enter the URL to your short video (MP4, WebM, etc.)
        </p>
      </div>

      {/* Tags Input */}
      <div className='space-y-2'>
        <label
          htmlFor='tags'
          className='block text-sm font-semibold text-foreground'
        >
          Tags
        </label>
        <input
          type='text'
          id='tags'
          placeholder='Enter tags separated by commas (e.g., funny, dance, tutorial)'
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          className='w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all'
          required
        />
        <p className='text-xs text-muted-foreground'>
          Separate multiple tags with commas for better discoverability
        </p>
        {/* Tag Preview */}
        {tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-3'>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className='bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium'
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className='flex gap-4 pt-4'>
        <button
          type='submit'
          disabled={isSubmitting}
          className='flex-1 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all disabled:cursor-not-allowed cursor-pointer'
        >
          {isSubmitting ? 'Uploading...' : 'Submit Short'}
        </button>
        <Link href='/' className='flex-1'>
          <button
            type='button'
            className='w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer'
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  )
}
