export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6 sm:mb-8">
          Let&apos;s connect.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-12">
          I&apos;m always interested in hearing about new projects and opportunities.
        </p>

        <div className="mb-10 sm:mb-12">
          <a
            href="mailto:info@williamhoffman.dev"
            className="text-lg sm:text-xl md:text-2xl text-neutral-100 hover:text-neutral-300 active:text-neutral-400 transition-colors duration-200 font-medium break-all touch-manipulation"
          >
            info@williamhoffman.dev
          </a>
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 text-base sm:text-lg">
          <a
            href="https://github.com/williamhoffman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-100 active:text-white transition-colors duration-200 touch-manipulation"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/william-hoffman-66140662/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-100 active:text-white transition-colors duration-200 touch-manipulation"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 sm:mt-20 text-xs sm:text-sm text-neutral-600">
          <p>© 2025 William Hoffman. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
