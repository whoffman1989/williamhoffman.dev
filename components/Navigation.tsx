'use client';

export default function Navigation() {

  return (
    <header className='backdrop-blur-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between max-w-6xl'>
        <div className='flex items-center'>
          <a href='#hero' className='text-xl sm:text-2xl font-bold text-white touch-manipulation'>
            wh.
          </a>
        </div>
        <nav className='flex items-center'>
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            <a
              href="#about"
              className="text-neutral-400 hover:text-neutral-100 active:text-white transition-colors duration-200 text-sm sm:text-base font-medium touch-manipulation"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-neutral-400 hover:text-neutral-100 active:text-white transition-colors duration-200 text-sm sm:text-base font-medium touch-manipulation"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-neutral-400 hover:text-neutral-100 active:text-white transition-colors duration-200 text-sm sm:text-base font-medium touch-manipulation"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
