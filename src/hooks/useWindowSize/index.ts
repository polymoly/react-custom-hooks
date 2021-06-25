import { useCallback, useEffect, useState } from "react";

declare interface Size {
  width: number;
  height: number;
}
/**
 * its trigger by resizing the window.
 * @readonly
 */
export const useWindowSize = (): Size => {
  const [size, setSize] = useState<Size>({
    width: window.innerWidth || 0,
    height: window.innerHeight || 0,
  });

  const handler: () => void = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if ((window || typeof window) === undefined) return;
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [handler]);

  return size;
};
