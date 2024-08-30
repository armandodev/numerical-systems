export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto min-h-[50vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          Convertidor de sistemas numéricos
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Convierte números de sistemas binarios, octales, decimales y
          hexadecimales a otros sistemas numéricos.
        </p>
      </div>
    </section>
  );
}
