import { motion } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import styles from './HistoryPage.module.css';

export const HistoryPage = () => {
  const location = useLocation();

  return (
    <motion.div
      className={styles.page}
      initial={{ position: "absolute", top: 0, x: "100%" }}
      animate={{
        x: "0%",
        transitionEnd: {
          position: "relative",
        },
      }}
      exit={{ position: "absolute", x: "100%", zIndex: 2 }}
      transition={{ duration: 0.5 }}
    >
      History page{" "}
      <div>
        <Link to="/" state={{ from: location.pathname }}>
          root
        </Link>
      </div>
    </motion.div>
  );
}