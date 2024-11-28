import React from 'react';
import { motion } from 'framer-motion';

interface AppleSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: string;
  fullWidth?: boolean;
}

export default function AppleSection({
  title,
  subtitle,
  children,
  background = 'bg-white',
  fullWidth = false
}: AppleSectionProps) {
  return (
    <section className={`py-20 ${background}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-[980px] mx-auto px-4'}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-semibold text-gray-900 mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-500 max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}