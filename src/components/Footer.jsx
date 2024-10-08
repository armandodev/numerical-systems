import Github from "@icons/Github";
import Portfolio from "@icons/Portfolio";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-screen-sm mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          Sitio creado por{" "}
          <a
            href="https://armandodev-portfolio.vercel.app/"
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
          >
            @armandodev
          </a>
        </p>

        <ul className="flex gap-2">
          <li>
            <a
              className="block hover:scale-125 transition duration-300"
              href="https://github.com/armandodev/numerical-systems"
              target="_blank"
            >
              <span className="sr-only">Github</span>
              <Github className="stroke-gray-600 dark:stroke-gray-400" />
            </a>
          </li>
          <li>
            <a
              className="block hover:scale-125 transition duration-300"
              href="https://armandodev-portfolio.vercel.app/"
              target="_blank"
            >
              <span className="sr-only">Portfolio</span>
              <Portfolio className="stroke-gray-600 dark:stroke-gray-400" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
