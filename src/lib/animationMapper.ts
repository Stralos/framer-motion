
import { Paths, createPath } from 'router/paths';

type Props<T> = {
  from: ReturnType<typeof createPath>;
  to: ReturnType<typeof createPath>;
  animation: T
};

const createMap = <T>(props: Props<T>) => {
  return props;
};

const createMappings = <T extends object>(mappings: ReturnType<typeof createMap<T>> []) => {
  return (from: string, to: string) => {
    return mappings.find((v) => v.from.match(from) && v.to.match(to))
      ?.animation;
  }
}

const getAnimation = createMappings([
  createMap({
    from: Paths.about,
    to: Paths.booking.root,
    animation: { a: "2", b: "1" },
  }),
  createMap({
    from: Paths.home,
    to: Paths.home,
    animation: { a: "1", b: "1" },
  }),
]);

const animation = getAnimation("", "");