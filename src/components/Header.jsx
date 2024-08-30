import Binary from "@icons/Binary";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="flex items-center gap-4" href="/">
          <Binary
            className="stroke-blue-600 dark:stroke-blue-400"
            width={40}
            height={40}
          />
          <span className="hidden sm:inline-block text-xl font-bold">
            Sistemas numéricos
          </span>
        </a>
      </div>
    </header>
  );
}
