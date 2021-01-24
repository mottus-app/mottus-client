import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useComponentDidMount(func: () => any) {
  useEffect(func, []);
}
