export default function Switch({
  checked,
  onChange,
  size = "md",
  disabled = false,
}) {
  const sizes = {
    sm: {
      track: "w-9 h-5",
      thumb: "w-4 h-4 translate-x-4",
    },
    md: {
      track: "w-11 h-6",
      thumb: "w-5 h-5 translate-x-5",
    },
    lg: {
      track: "w-14 h-7",
      thumb: "w-6 h-6 translate-x-7",
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative inline-flex items-center rounded-full transition-colors
        ${sizes[size].track}
        ${checked ? "bg-green-500" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <span
        className={`
          inline-block bg-white rounded-full shadow transform transition-transform
          ${sizes[size].thumb}
          ${checked ? sizes[size].thumb : "translate-x-1"}
        `}
      />
    </button>
  );
}
