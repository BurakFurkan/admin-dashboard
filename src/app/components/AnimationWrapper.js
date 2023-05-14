"use client";

import { motion, AnimatePresence } from "framer-motion";

export const AnimationWrapper = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div className="w-full h-full p-0 m-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);