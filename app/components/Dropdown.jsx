import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function DropdownMenu({
  trigger,
  items = [],
  align = "right", // left | right
}) {
    const { theme} = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <div onClick={() => setOpen((o) => !o)}>{trigger}</div>

      {open && (
        <div
          className={`
            absolute z-20 mt-2 min-w-40 ${theme === "light" ? "bg-white":"bg-gray-900" }  border border-gray-400  rounded-md shadow-lg
            ${align === "right" ? "right-0" : "left-0"}
          `}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className={`
                w-full text-left px-4 py-2 text-sm cursor-pointer                
                 ${theme === "light" ? "hover:bg-gray-100":"hover:bg-gray-200 hover:text-gray-900"}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
