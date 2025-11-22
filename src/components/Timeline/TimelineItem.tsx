// TimelineItem.tsx
import React from "react";
import { motion } from "motion/react";
import { MediaCard } from "../MediaCard";
import { TimelineEvent } from "../../data/timelineData";

type Props = {
  event: TimelineEvent;
  index: number;
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const TimelineItem: React.FC<Props> = ({ event, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full mb-16 md:mb-20">
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Timeline dot */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 border-4 border-white shadow-lg z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          aria-hidden="true"
        />

        {/* Content */}
        <motion.article
          className={`relative ${
            isLeft
              ? "md:pr-[calc(50%+2rem)] md:text-right"
              : "md:pl-[calc(50%+2rem)] md:text-left"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          transition={{ duration: 0.55, ease: "easeOut" }}
          aria-labelledby={`timeline-title-${event.id}`}
        >
          <div
            className={`inline-block w-full md:max-w-md ${
              isLeft ? "md:ml-auto" : "md:mr-auto"
            }`}
          >
            <p className="text-sm text-pink-500 mb-2">{event.date}</p>
            <h3
              id={`timeline-title-${event.id}`}
              className="text-pink-700 mb-2"
            >
              {event.title}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {event.description}
            </p>

            <MediaCard media={event.media} />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default TimelineItem;
