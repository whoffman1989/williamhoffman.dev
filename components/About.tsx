export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6 sm:mb-8">
          about
        </h2>

        <div className="space-y-5 sm:space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
          <p>
            i'm a developer and designer passionate about creating intuitive, powerful tools that make complex tasks simple. With a focus on user experience and clean code, I build products that people actually want to use.
          </p>

          <p>
            my work spans web applications, AI-powered tools, and developer utilities. I believe in thoughtful design, sustainable development practices, and shipping products that solve real problems.
          </p>

          <div className="mt-10 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-5 sm:mb-6">
              currently focused on
            </h3>
            <ul className="space-y-3 text-neutral-300 text-base sm:text-base">
              <li className="flex items-start">
                <span className="text-neutral-500 mr-3 flex-shrink-0">•</span>
                <span>designing modern web applications with next.js, tailwindCSS, supabase, openAI, and vercel</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-3 flex-shrink-0">•</span>
                <span>creating products that improve user productivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-3 flex-shrink-0">•</span>
                <span>expanding my knowledge of AI, and AI tools to integrate into the software I build</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-500 mr-3 flex-shrink-0">•</span>
                <span>exploring new frontiers in software design and UX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
