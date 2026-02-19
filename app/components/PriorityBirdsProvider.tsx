'use client'
import { getPriorityBirdsMap } from "@/app/lib/priority-birds";
import { createContext, useContext } from "react";

export const PriorityBirdsContext = createContext<Record<string, Set<string>>>({});

export function usePriorityBirds() {
  return useContext(PriorityBirdsContext);
}

export default function PriorityBirdsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const priorityBirds = getPriorityBirdsMap(new Date().getMonth() + 1);
  console.log("priorityBirds", priorityBirds);
  return <PriorityBirdsContext.Provider value={priorityBirds}>{children}</PriorityBirdsContext.Provider>;
}
