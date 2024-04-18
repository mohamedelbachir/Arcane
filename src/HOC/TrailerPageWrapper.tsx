import { motion } from "framer-motion";
import React from "react";

function TrailerPageWrapper({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      key="page"
      className="z-[2]"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <>{children}</>
    </motion.div>
  );
}

export default TrailerPageWrapper;
