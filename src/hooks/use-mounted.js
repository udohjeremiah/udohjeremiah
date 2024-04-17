// React
import { useEffect, useState } from "react";

export function useMounted() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(true);
  }, []);

  return value;
}
