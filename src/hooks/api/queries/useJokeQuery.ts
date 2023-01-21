import { useQuery } from "@tanstack/react-query";
import { ApiClient, useApiClient } from "hooks/useApiClient";
import { ExtractBody, ExtractKey, QueryOptions } from "lib/query";

const queryKey = () => ["joke-api"];
const queryFn = (apiClient: ApiClient) => async () => apiClient.jokeApi();

type Body = ExtractBody<typeof queryFn>;
type Key = ExtractKey<typeof queryKey>;

export const useJokeQuery = <T = Body>(
  options: QueryOptions<Body, Key, T> = {}
) => {
  const apiClient = useApiClient();
  return useQuery({
    queryKey: queryKey(),
    queryFn: useJokeQuery.fetch(apiClient),
    ...options,
  });
};

useJokeQuery.key = queryKey;
useJokeQuery.fetch = queryFn;
useJokeQuery.set = (p: Body) => p;
