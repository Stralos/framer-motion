import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useRef } from "react";

export const QueryProvider = ({ children }: PropsWithChildren<{}>) => {
  const client = useRef(new QueryClient()).current;

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
