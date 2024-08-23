import { useId, useState } from "react";

import { tw } from "@/lib/utils";

const baseClassName = tw(
  "w-full px-3 py-[9px] rounded-lg border shadow-sm block text-sm transition-all leading-5",
  "outline-green-500 bg-white border-neutral-200 text-neutral-950 placeholder:text-neutral-400",
  "dark:bg-neutral-950 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-500",
);

function Counter({ count, maxLength }) {
  return (
    <p
      className={tw(
        "text-right text-xs",
        "text-neutral-500",
        "dark:text-neutral-400",
      )}
    >
      {count}/{maxLength}
    </p>
  );
}

export function Input({ label, maxLength, onChange, ...properties }) {
  const id = useId();
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    onChange?.(event);
    setCount(event.target.value.length);
  };

  return (
    <fieldset className="space-y-1">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {maxLength && <Counter count={count} maxLength={maxLength} />}
      </div>
      <input
        id={id}
        placeholder="Ruth Oghenekevwe"
        className={baseClassName}
        maxLength={maxLength}
        onChange={handleChange}
        {...properties}
      />
    </fieldset>
  );
}

export function Textarea({ label, maxLength, onChange, ...properties }) {
  const id = useId();
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    onChange?.(event);
    setCount(event.target.value.length);
  };

  return (
    <fieldset className="space-y-1">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {maxLength && <Counter count={count} maxLength={maxLength} />}
      </div>
      <textarea
        id={id}
        placeholder="Ruth Oghenekevwe"
        className={tw(baseClassName, "max-h-[15rem] min-h-[5rem] resize-y")}
        maxLength={maxLength}
        onChange={handleChange}
        {...properties}
      />
    </fieldset>
  );
}

export function Select({ label, data, ...properties }) {
  const id = useId();

  return (
    <fieldset className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <select id={id} className={baseClassName} {...properties}>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label} - {item.subtitle}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
