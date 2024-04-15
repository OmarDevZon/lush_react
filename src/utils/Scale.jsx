
import { motion } from "framer-motion";

export const Scale = ({ children  }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

