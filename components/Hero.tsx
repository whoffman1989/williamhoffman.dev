import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          William Hoffman
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 mb-8 sm:mb-12 font-light min-h-[2rem]">
          <TypewriterText />
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 active:bg-neutral-300 transition-colors duration-200 w-full sm:w-auto text-center touch-manipulation"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-neutral-100 border border-neutral-700 rounded-lg font-medium hover:bg-neutral-800 active:bg-neutral-700 transition-colors duration-200 w-full sm:w-auto text-center touch-manipulation"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
