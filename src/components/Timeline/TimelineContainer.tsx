// TimelineContainer.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { TimelineItem } from './TimelineItem';
import { TimelineEvent } from '../../data/timelineData';

type Props = {
  events: TimelineEvent[];
};

export const TimelineContainer: React.FC<Props> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (events.length === 0) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <p className="text-gray-500 text-lg">
          Chưa có kỷ niệm nào được thêm vào timeline. 
        </p>
      </div>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32"
      aria-label="Timeline kỷ niệm"
    >
      {/* Timeline center line - static background */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-pink-200 to-transparent top-0 bottom-0"
        style={{ height: '100%' }}
        aria-hidden="true"
      />

      {/* Animated progress line */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-pink-500 to-pink-300 origin-top"
        style={{ 
          scaleY,
          top: 0,
          height: '100%'
        }}
        aria-hidden="true"
      />

      {/* Timeline items */}
      <div className="relative">
        {events.map((event, index) => (
          <TimelineItem key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TimelineContainer;
