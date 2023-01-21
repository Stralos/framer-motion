import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useJokeQuery } from "hooks/api/queries/useJokeQuery";
import { useApiClient, Joke, ApiClient } from "hooks/useApiClient";
import { ExtractBody, MutationOptions, ExtractParameters } from "lib/query";

const mutationFn = (apiClient: ApiClient) => (data: Joke) =>
  apiClient.jokeApiMutation(data);

type Body = ExtractBody<typeof mutationFn>;
type Variables = ExtractParameters<typeof mutationFn>;

export const useJokeMutation = (
  options: MutationOptions<Body, Variables> = {}
) => {
  const { onSuccess, ...rest } = options;
  const queryClient = useQueryClient();
  const apiClient = useApiClient();
  return useMutation({
    mutationFn: mutationFn(apiClient),
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(useJokeQuery.key(), useJokeQuery.set(data));
      onSuccess?.(data, variables, context);
    },
    ...rest,
  });
};
