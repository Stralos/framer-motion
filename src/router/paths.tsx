import { generatePath, matchPath } from 'react-router-dom';
type PathParams<T extends string> = Parameters< typeof generatePath<T>>[1]

export const createPath = <T extends string>(path: T) => {
  return {
    path: path,
    generate: (props: PathParams<T>) => generatePath(path, props),
    match: (location: string) => matchPath(path, location),
  };
};

export const Paths = {
  item: createPath("item/:id"),
  profile: createPath("profile"),
  report: createPath("report"),
  booking: {
    root: createPath("booking"),
    calendar: createPath("booking/calendar"),
    slots: createPath("booking/slots"),
  },
  checkout: createPath("checkout"),
  about: createPath("about"),
  home: createPath("/"),
};
