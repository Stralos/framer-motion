import { useQueryClient } from "@tanstack/react-query";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { useJokeQuery } from "hooks/api/queries/useJokeQuery";
import { useApiClient } from "hooks/useApiClient";

export const PrefetchProvider = ({ children }: PropsWithChildren<{}>) => {
  const client = useQueryClient();
  const apiClient = useApiClient();
  const [prefetched, setPrefetched] = useState(false);

  const preFetch = useCallback(async () => {
    if (prefetched) {
      return;
    }
    Promise.allSettled([
      client.prefetchQuery({
        queryKey: useJokeQuery.key(),
        queryFn: useJokeQuery.fetch(apiClient),
      }),
    ]).finally(() => setPrefetched(true));
  }, [client, apiClient, prefetched]);

  useEffect(() => {
    preFetch();
  }, [preFetch]);

  return <>{children}</>;
};
