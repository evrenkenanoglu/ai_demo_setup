"use client";
import { motion } from "framer-motion";

export const StarExplosion = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [1, 1, 0],
            x: Math.cos((i * Math.PI) / 4) * 200,
            y: Math.sin((i * Math.PI) / 4) * 200,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={i === 0 ? onClose : undefined} // Only trigger once
          className="absolute w-2 h-2 bg-emerald-400 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};