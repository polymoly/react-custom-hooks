import { useCallback, useState } from "react";

export const usePreviousState = <T>(
  initialState: T
): [T, T, (next: T) => void] => {
  const [[prevState, state], setState] = useState<T[]>([
    undefined as unknown as T,
    initialState,
  ]);

  const setValue = useCallback<(next: T) => void>(
    (nextState) => {
      setState([state, nextState]);
    },
    [state]
  );

  return [prevState, state, setValue];
};
