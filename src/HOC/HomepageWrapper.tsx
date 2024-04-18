import React, { FC } from "react";
import { motion } from "framer-motion";

export interface PageProps {
  title: string;
  children?: React.ReactNode;
}

const Page: FC<PageProps> = ({ title, children }) => {
  return (
    <motion.div
      key="page"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ delay: 0, duration: 0.3 }}
    >
      <>{children}</>
    </motion.div>
  );
};

export default Page;
