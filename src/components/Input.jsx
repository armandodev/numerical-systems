export default function Input({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <label>
      {error ? (
        <span className="text-red-600">{error}</span>
      ) : (
        <span>{label}</span>
      )}
      <input
        className={`w-full border border-gray-200 dark:border-gray-700 py-2 px-4 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 rounded-lg bg-gray-50 dark:bg-gray-900 ${
          error &&
          "border-red-600 dark:border-red-400 focus:border-red-600 dark:focus:border-red-400 text-red-600 dark:text-red-400"
        }`}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
