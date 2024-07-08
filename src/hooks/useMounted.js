import { useEffect, useState } from "react";

export function useMounted() {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted;
}
