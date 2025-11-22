// Hero.tsx
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Heart, Sparkles, Gift } from "lucide-react";

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax effect for background shapes
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Floating elements data
  const floatingElements = [
    { emoji: "🎈", delay: 0, duration: 3, x: "10%", y: "20%" },
    { emoji: "🎈", delay: 0.5, duration: 3.5, x: "85%", y: "15%" },
    { emoji: "🎂", delay: 1, duration: 4, x: "15%", y: "70%" },
    { emoji: "🎁", delay: 0.3, duration: 3.2, x: "80%", y: "65%" },
    { emoji: "✨", delay: 0.8, duration: 2.8, x: "25%", y: "40%" },
    { emoji: "🌸", delay: 1.2, duration: 3.8, x: "75%", y: "45%" },
    { emoji: "💝", delay: 0.6, duration: 3.6, x: "20%", y: "55%" },
    { emoji: "🎉", delay: 1.5, duration: 3.3, x: "70%", y: "30%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-bg-soft via-white to-pink-100">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-pink-500 rounded-full opacity-20 blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* Decorative gradient circles */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-15 blur-2xl"
        aria-hidden="true"
      />

      {/* Floating decorative elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-5xl pointer-events-none select-none"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Sparkle effects */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-pink-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative line top */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-pink-500" />
            </motion.div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-pink-500" />
            </motion.div>
          </motion.div>

          {/* Birthday cake animation */}
          <motion.div
            className="text-7xl md:text-9xl mb-6 inline-block"
            animate={{
              rotate: [0, 5, -5, 5, 0],
              scale: [1, 1.1, 1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            🎂
          </motion.div>

          {/* Main title with gradient */}
          <motion.h1
            className="text-pink-700 mb-3 px-4 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Happy Birthday, Tú Quân!
          </motion.h1>

          {/* Decorative subtitle badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-pink-100 border-2 border-pink-300 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Gift className="w-5 h-5 text-pink-600" />
            <span className="text-pink-700">Tuổi 21 thật tuyệt vời</span>
            <Gift className="w-5 h-5 text-pink-600" />
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            className="text-gray-700 mb-4 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Cùng nhìn lại hành trình tình bạn của chúng ta
          </motion.p>

          <motion.p
            className="text-pink-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            22/11/2004 — 22/11/2025
          </motion.p>

          {/* Decorative hearts */}
          <motion.div
            className="flex justify-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {["💖", "✨", "🌸", "✨", "💖"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div
            className="inline-flex items-center gap-2 text-pink-500 cursor-pointer group bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-pink-200 hover:border-pink-400 hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 0.9,
                behavior: "smooth",
              });
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.scrollTo({
                  top: window.innerHeight * 0.9,
                  behavior: "smooth",
                });
              }
            }}
            aria-label="Kéo xuống để khám phá timeline"
          >
            <span className="group-hover:text-pink-700 transition-colors">
              Khám phá kỷ niệm của chúng ta
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
