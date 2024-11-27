import React from 'react';
import { motion } from 'framer-motion';

interface AppleGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}

export default function AppleGrid({ children, columns = 3, gap = 8 }: AppleGridProps) {
  return (
    <div className={`grid md:grid-cols-${columns} gap-${gap}`}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}