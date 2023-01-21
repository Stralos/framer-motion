export interface Joke {
  id: number;
  punchline: string;
  setup: string;
  type: string;
}

const apiClient = {
  jokeApi: async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    return (await response.json()) as Joke;
  },
  jokeApiMutation: async (data: Joke): Promise<Joke> => {
    return data;
  },
};

export type ApiClient = typeof apiClient;

export const useApiClient = () => apiClient;
