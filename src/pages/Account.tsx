import { motion } from 'framer-motion';
import styles from "./AccountPage.module.css";
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { Paths } from 'router/paths'

export const AccountPage = () => {
  const location = useLocation();
  const delay = useMemo(() => {
    return location?.state?.from === "/about" ? 0 : 3;
  }, [location.state]);



  return (
    <>
      <motion.div
        className={styles.page}
        initial={{ position: "absolute", top: 0 }}
        animate={{
          transitionEnd: {
            position: "relative",
          },
        }}
        exit={{ position: "absolute" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Account page{" "}
        <div>
          <Link
            to={Paths.about.generate({})}
            state={{ from: location.pathname }}
          >
            About
          </Link>

          <Link
            to={Paths.profile.generate({})}
            state={{ from: location.pathname }}
          >
            Profile
          </Link>
        </div>
      </motion.div>
    </>
  );
}