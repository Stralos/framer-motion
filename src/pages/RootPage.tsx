import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, useMemo } from "react";

// https://github.com/remix-run/react-router/discussions/8008#discussioncomment-1280897
// https://stackoverflow.com/a/74351729


export const RootPage = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const previous = location?.state?.from as string | undefined;
  const mode = useMemo(() => {
    const record: Record<
      string,
      Record<string, "wait" | "sync" | "popLayout">
    > = {
      "/": {
        "/about": "sync",
        "/profile": "sync",
      },
      "/about": {
        "/": "sync",
      },
      "/profile": {
        "/": "sync",
      },
    };
    if (previous == null) {
      return "wait";
    }

    return record[location.pathname]?.[previous] ?? "wait";
  }, [location.pathname, previous]);

  return (
    <AnimatePresence initial={false} mode={mode}>
      <Suspense key={location.pathname}>{outlet}</Suspense>
    </AnimatePresence>
  );
}