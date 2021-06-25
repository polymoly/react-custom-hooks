import { useEffect, useState } from "react";

export const useCamelCase = (value: string, seperator: string): string => {
  const [camelCase, setCamelCase] = useState<string>("");

  useEffect(() => {
    const seperatedValues = value?.split(seperator);
    const camelCasedValue = (seperatedValues || [])
      ?.map((value, index) => {
        return index === 0
          ? value
          : `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
      })
      .join("");
    setCamelCase(camelCasedValue);
  }, [value, seperator]);

  return camelCase;
};
