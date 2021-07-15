import { useContext } from "react";

import { CountdownContext } from "../contexts/CountdownContext";

export function useCountdown() {
  const value = useContext(CountdownContext);

  return value;
}