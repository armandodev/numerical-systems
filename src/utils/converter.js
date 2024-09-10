const BIN_REGEX = /^[0-1]+$/;
const FRAC_BIN_REGEX = /^[0-1]+\.[0-1]+$/;
const OCT_REGEX = /^[0-7]+$/;
const FRAC_OCT_REGEX = /^[0-7]+\.[0-7]+$/;
const DEC_REGEX = /^[0-9]+$/;
const FRAC_DEC_REGEX = /^[0-9]+\.[0-9]+$/;
const HEX_REGEX = /^[0-9a-fA-F]+$/;
const FRAC_HEX_REGEX = /^[0-9a-fA-F]+\.[0-9a-fA-F]+$/;

export function isValidBin(number) {
  if (/^[0-1]+\.$/.test(number)) {
    return true;
  }
  return number.includes(".")
    ? FRAC_BIN_REGEX.test(number)
    : BIN_REGEX.test(number);
}

export function isValidOct(number) {
  if (/^[0-7]+\.$/.test(number)) {
    return true;
  }
  return number.includes(".")
    ? FRAC_OCT_REGEX.test(number)
    : OCT_REGEX.test(number);
}

export function isValidDec(number) {
  if (/^[0-9]+\.$/.test(number)) {
    return true;
  }
  return number.includes(".")
    ? FRAC_DEC_REGEX.test(number)
    : DEC_REGEX.test(number);
}

export function isValidHex(number) {
  if (/^[0-9a-fA-F]+\.$/.test(number)) {
    return true;
  }
  return number.includes(".")
    ? FRAC_HEX_REGEX.test(number)
    : HEX_REGEX.test(number);
}

function decimalToHex(number) {
  if (number >= 10 && number <= 15) {
    return String.fromCharCode(number + 55);
  } else if (number >= 0 && number <= 9) {
    return number;
  }
}

function hexToDecimal(number) {
  if (number >= "A" && number <= "F") {
    return number.charCodeAt(0) - 55;
  } else if (number >= "0" && number <= "9") {
    return number;
  }
}

export function decimalToAny(number, base) {
  if (number === 0) return "0";
  let result = "";

  while (number > 0) {
    result += decimalToHex(number % base);
    number = Math.floor(number / base);
  }

  return result.split("").reverse().join("");
}

export function anyToDecimal(number, base) {
  let decimal = 0;
  const digits = number.split("").reverse();

  while (digits.length > 0) {
    const digit = digits.pop();
    decimal += parseInt(hexToDecimal(digit)) * Math.pow(base, digits.length);
  }

  return decimal;
}
