const conversions = [
  { from: "Binario", to: "Octal", href: "/convert/binary-to-octal" },
  { from: "Binario", to: "Decimal", href: "/convert/binary-to-decimal" },
  {
    from: "Binario",
    to: "Hexadecimal",
    href: "/convert/binary-to-hexadecimal",
  },
  { from: "Octal", to: "Binario", href: "/convert/octal-to-binary" },
  { from: "Octal", to: "Decimal", href: "/convert/octal-to-decimal" },
  { from: "Octal", to: "Hexadecimal", href: "/convert/octal-to-hexadecimal" },
  { from: "Decimal", to: "Binario", href: "/convert/decimal-to-binary" },
  { from: "Decimal", to: "Octal", href: "/convert/decimal-to-octal" },
  {
    from: "Decimal",
    to: "Hexadecimal",
    href: "/convert/decimal-to-hexadecimal",
  },
  {
    from: "Hexadecimal",
    to: "Binario",
    href: "/convert/hexadecimal-to-binary",
  },
  { from: "Hexadecimal", to: "Octal", href: "/convert/hexadecimal-to-octal" },
  {
    from: "Hexadecimal",
    to: "Decimal",
    href: "/convert/hexadecimal-to-decimal",
  },
];

export default function Conversions() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {conversions.map((conversion, index) => (
            <a
              key={index}
              href={conversion.href}
              className="block p-6 bg-white dark:bg-gray-800 rounded-sm shadow-sm hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {conversion.from} a {conversion.to}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convierte números de {conversion.from} a {conversion.to}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
