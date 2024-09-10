import { useState } from "react";
import {
  isValidBin,
  isValidDec,
  isValidOct,
  isValidHex,
  decimalToAny,
  anyToDecimal,
} from "@utils/converter";
import Input from "@components/Input";

export default function Converter() {
  const [binary, setBinary] = useState("");
  const [binaryError, setBinaryError] = useState("");
  const [octal, setOctal] = useState("");
  const [octalError, setOctalError] = useState("");
  const [decimal, setDecimal] = useState("");
  const [decimalError, setDecimalError] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [hexadecimalError, setHexadecimalError] = useState("");

  const handleBinaryChange = (e) => {
    const value = e.target.value;

    setBinaryError("");

    if (value === "") {
      setBinary("");
      setOctal("");
      setDecimal("");
      setHexadecimal("");
      return;
    }

    if (!isValidBin(value)) {
      setBinaryError("Solo 0, 1 y .");
      return;
    }

    setOctalError("");
    setDecimalError("");
    setHexadecimalError("");
    setBinary(value);
    setOctal(decimalToAny(anyToDecimal(value, 2), 8));
    setDecimal(anyToDecimal(value, 2));
    setHexadecimal(decimalToAny(anyToDecimal(value, 2), 16));
  };

  const handleOctalChange = (e) => {
    const value = e.target.value;

    setOctalError("");

    if (value === "") {
      setBinary("");
      setOctal("");
      setDecimal("");
      setHexadecimal("");
      return;
    }

    if (!isValidOct(value)) {
      setOctalError("Solo 0 a 7 y .");
      return;
    }

    setBinaryError("");
    setDecimalError("");
    setHexadecimalError("");
    setBinary(decimalToAny(anyToDecimal(value, 8), 2));
    setOctal(value);
    setDecimal(anyToDecimal(value, 8));
    setHexadecimal(decimalToAny(anyToDecimal(value, 8), 16));
  };

  const handleDecimalChange = (e) => {
    const value = e.target.value;

    setDecimalError("");

    if (value === "") {
      setBinary("");
      setOctal("");
      setDecimal("");
      setHexadecimal("");
      return;
    }

    if (!isValidDec(value)) {
      setDecimalError("Solo números y .");
      return;
    }

    setBinaryError("");
    setOctalError("");
    setHexadecimalError("");
    setDecimal(value);
    setBinary(decimalToAny(value, 2));
    setOctal(decimalToAny(value, 8));
    setHexadecimal(decimalToAny(value, 16));
  };

  const handleHexChange = (e) => {
    const value = e.target.value.toUpperCase();

    setHexadecimalError("");

    if (value === "") {
      setBinary("");
      setOctal("");
      setDecimal("");
      setHexadecimal("");
      return;
    }

    if (!isValidHex(value)) {
      setHexadecimalError("Solo números, A-F y .");
      return;
    }

    setBinaryError("");
    setOctalError("");
    setDecimalError("");
    setBinary(decimalToAny(anyToDecimal(value, 16), 2));
    setOctal(decimalToAny(anyToDecimal(value, 16), 8));
    setDecimal(anyToDecimal(value, 16));
    setHexadecimal(value);
  };

  return (
    <main>
      <section className="max-w-screen-sm mx-auto min-h-[75vh] px-4 py-8 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">
          Convertidor de sistemas numéricos
        </h1>

        <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id={"binary"}
            label="Binario"
            placeholder="111110100"
            value={binary}
            onChange={handleBinaryChange}
            error={binaryError}
          />

          <Input
            id={"octal"}
            label="Octal"
            placeholder="764"
            value={octal}
            onChange={handleOctalChange}
            error={octalError}
          />

          <Input
            id={"decimal"}
            label="Decimal"
            placeholder="500"
            value={decimal}
            onChange={handleDecimalChange}
            error={decimalError}
          />

          <Input
            id={"hexadecimal"}
            label="Hexadecimal"
            placeholder="1F4"
            value={hexadecimal}
            onChange={handleHexChange}
            error={hexadecimalError}
          />
        </form>
      </section>
    </main>
  );
}
