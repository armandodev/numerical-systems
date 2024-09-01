import Binary from "@icons/Binary";

export default function Header() {
  return (
    <header className="max-w-screen-sm mx-auto flex items-center justify-between p-4">
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
    </header>
  );
}
