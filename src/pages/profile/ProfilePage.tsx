import { motion } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import { Paths } from "router/paths";
import { useJokeQuery } from 'hooks/api/queries/useJokeQuery';
import { useJokeMutation } from 'hooks/api/mutations/useJokeMutation';

export const ProfilePage = () => {
  const location = useLocation();
  const jokeQuery = useJokeQuery();
  const jokeMutation = useJokeMutation()

  return (
    <motion.div
      className={styles.page}
      initial={{ position: "absolute", top: 0, y: "-100%" }}
      animate={{
        y: "0%",
        transitionEnd: {
          position: "relative",
        },
      }}
      exit={{ y: "-100%", zIndex: 2 }}
      transition={{ duration: 0.5 }}
    >
      {!jokeQuery.data && <div>Loading...</div>}
      {jokeQuery.data && (
        <div>
          Profile page{" "}
          <div>
            <Link to={Paths.home.path} state={{ from: location.pathname }}>
              Home
            </Link>
          </div>
          {jokeQuery.data && (
            <div>
              <div>{jokeQuery.data.setup}</div>
              <div>{jokeQuery.data.punchline}</div>
            </div>
          )}
          <button
            onClick={() =>
              jokeMutation.mutate({
                id: 1,
                punchline: "There is none",
                setup: "Where is the punchline",
                type: "",
              })
            }
          >
            Mutate
          </button>
        </div>
      )}
    </motion.div>
  );
}