import { useState } from "react";

export default function Converter() {
  const [from, setFrom] = useState(0);
  const [number, setNumber] = useState("");
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [error, setError] = useState("");

  const numberPlaceholder = from
    ? "Ingresa el número a convertir"
    : "Primero selecciona el sistema";

  function decimalToAny(number, base) {
    if (number === 0) return "0";
    let result = "",
      remaining;
    let num = Math.abs(number);

    while (num > 0) {
      remaining = num % base;
      if (remaining > 9 && base === 16) {
        remaining = String.fromCharCode(remaining + 87);
      }
      result = remaining + result;
      num = Math.floor(num / base);
    }

    return number < 0 ? "-" + result : result;
  }

  function anyToDecimal(number, base) {
    let decimal = 0;
    const digits = number.toLowerCase().split("").reverse();
    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      if (digit >= "a" && digit <= "f") {
        decimal += (digit.charCodeAt(0) - 87) * Math.pow(base, i);
      } else {
        decimal += parseInt(digit) * Math.pow(base, i);
      }
    }
    return decimal;
  }

  const convert = (from, number) => {
    let decimalNumber;
    switch (parseInt(from)) {
      case 1:
        decimalNumber = anyToDecimal(number, 2);
        break;
      case 2:
        decimalNumber = anyToDecimal(number, 8);
        break;
      case 3:
        decimalNumber = parseInt(number);
        break;
      case 4:
        decimalNumber = anyToDecimal(number, 16);
        break;
      default:
        setError("Sistema de numeración no válido");
        return;
    }

    setBinary(decimalToAny(decimalNumber, 2));
    setOctal(decimalToAny(decimalNumber, 8));
    setDecimal(decimalNumber.toString());
    setHexadecimal(decimalToAny(decimalNumber, 16));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (from === "4" && !/^[0-9a-fA-F]+$/.test(number)) {
      setError("Ingresa un número hexadecimal válido");
      return;
    } else if (from === "3" && !/^-?\d+$/.test(number)) {
      setError("Ingresa un número decimal válido");
      return;
    } else if (from === "2" && !/^[0-7]+$/.test(number)) {
      setError("Ingresa un número octal válido");
      return;
    } else if (from === "1" && !/^[0-1]+$/.test(number)) {
      setError("Ingresa un número binario válido");
      return;
    } else if (from === "0") {
      setError("Selecciona un sistema válido");
      return;
    }

    setError("");
    convert(from, number);
  }

  return (
    <main>
      <section className="max-w-screen-sm mx-auto min-h-[75vh] px-4 py-8 grid grid-cols-1 gap-4 place-items-center">
        <article className="w-full grid gap-4">
          <h1 className="text-4xl font-bold">
            Convertidor de sistemas numéricos
            <span className="sr-only">
              {" "}
              (Binario, Octal, Decimal, Hexadecimal)
            </span>
          </h1>

          <form className="w-full grid gap-4" onSubmit={handleSubmit}>
            {error && (
              <p className="bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-lg">
                {error}
              </p>
            )}

            <label>
              <span className="sr-only">Sistema de numeración</span>
              <select
                className="w-full border border-gray-200 dark:border-gray-700 py-2 px-4 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 rounded-lg bg-gray-50 dark:bg-gray-900"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="0" disabled>
                  Selecciona el sistema
                </option>
                <option value="1">Binario</option>
                <option value="2">Octal</option>
                <option value="3">Decimal</option>
                <option value="4">Hexadecimal</option>
              </select>
            </label>

            <label>
              <span className="sr-only">Número a convertir</span>
              <input
                className={`w-full border border-gray-200 dark:border-gray-700 py-2 px-4 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 rounded-lg bg-gray-50 dark:bg-gray-900 ${
                  !from && "cursor-not-allowed"
                }`}
                type="text"
                id="number"
                value={number}
                placeholder={numberPlaceholder}
                {...(!from && { disabled: true })}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              type="submit"
            >
              Convertir
            </button>
          </form>
        </article>

        {!error && binary && octal && decimal && hexadecimal && (
          <>
            <ul className="w-full grid gap-4 text-xl py-4">
              <h3 className="text-4xl font-bold">Resultados:</h3>
              <li>
                <span>Binario: {binary}</span>
              </li>
              <li>
                <span>Octal: {octal}</span>
              </li>
              <li>
                <span>Decimal: {decimal}</span>
              </li>
              <li>
                <span>Hexadecimal: {hexadecimal}</span>
              </li>
            </ul>

            <article className="max-w-screen-sm mx-auto grid grid-cols-1 gap-4 place-items-center">
              <h2 className="text-4xl font-bold">
                Procedimientos: ¿Cómo llegar al resultado?
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                Próximamente...
              </p>
            </article>
          </>
        )}
      </section>
    </main>
  );
}
