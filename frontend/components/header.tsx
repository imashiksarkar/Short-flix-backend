import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-black border-b border-border'>
      <div className='px-4 md:px-8 py-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center'>
            <span className='text-accent-foreground font-bold text-sm'>SF</span>
          </div>
          <h1 className='text-2xl font-bold text-primary'>Short Flix</h1>
        </div>
        <Link href='/add'>
          <button className='bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer'>
            + Add Video
          </button>
        </Link>
      </div>
    </header>
  )
}
