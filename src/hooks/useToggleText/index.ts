import { useCallback, useMemo, useState } from "react";

export const useToggleText = (value: string, toggleValue: string) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsToggled(!isToggled);
  }, [isToggled]);

  const text = useMemo<string>(() => {
    return isToggled ? toggleValue : value;
  }, [isToggled, toggleValue, value]);

  return { text, toggle };
};
