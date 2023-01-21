import {
  UseQueryOptions,
  QueryKey,
  UseMutationOptions,
} from "@tanstack/react-query";
import { ApiClient } from "hooks/useApiClient";

export type QueryOptions<T, K extends QueryKey, O = T> = Omit<
  UseQueryOptions<T, unknown, O, K>,
  "queryKey" | "queryFn"
>;
export type MutationOptions<Body, Props> = Omit<
  UseMutationOptions<Body, unknown, Props, unknown>,
  "mutationFn"
>;

//https://blog.logrocket.com/understanding-infer-typescript/
export type ExtractBody<
  T extends (
    ...args: any
  ) => (
    ...args: any
  ) => T extends (...args: any) => infer R
    ? R extends (...args: any) => infer K
      ? K
      : never
    : never
> = Awaited<ReturnType<ReturnType<T>>>;

export type ExtractKey<
  T extends (...args: any) => T extends (...args: any) => infer R ? R : never
> = ReturnType<T>;

export type ExtractParameters<
  T extends (
    ...args: any
  ) => (
    ...args: any
  ) => T extends (...args: any) => infer R
    ? R extends (...args: any) => infer K
      ? K
      : never
    : never
> = Parameters<ReturnType<T>>[0];
