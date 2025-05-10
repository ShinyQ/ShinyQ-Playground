import { motion } from 'framer-motion';
import { formatDate } from '@/utils/date';
import { itemVariants, dotVariants } from '@/components/ui/timeline-animations';
import type { TimelineItem as TimelineItemType } from '@/data/timeline';

interface TimelineItemProps {
    readonly item: TimelineItemType;
}

export default function TimelineItem({ item }: TimelineItemProps) {
    return (
        <motion.div key={item.id} variants={itemVariants} className="relative mb-10 pl-10">
            <motion.div
                variants={dotVariants}
                className="absolute w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/20 z-10"
                style={{ left: "-8px", top: "9px" }}
            />
            <div className="mb-2">
                <span className="bg-muted text-foreground/90 text-xs px-2 py-1 rounded-full">
                    {formatDate(item.startDate)} — {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                </span>
            </div>
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card rounded-lg p-6 border border-border shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-300"
            >
                <div className="mb-4 flex flex-col lg:flex-row justify-between items-start gap-4">
                    {item.logo && (
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm border border-border mb-4 lg:mb-0 order-first lg:order-last">
                            <img
                                src={item.logo}
                                alt={`${item.title} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                    <div className="lg:flex-1">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        {item.caption && (
                            <div className="mb-2 mt-1 text-sm text-foreground/70 italic">
                                {item.caption}
                            </div>
                        )}
                        <div className="text-primary">{item.subtitle}</div>
                    </div>
                </div>
                {item.description && item.description.length > 0 && (
                    <ul className="space-y-2 mb-4">
                        {item.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">▹</span>
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {item.tools && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {item.tools.map((tool, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-xs px-2 py-1 rounded-md bg-muted/50 text-foreground/70"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                )}
                <div className="mt-5 text-xs text-foreground/60 uppercase">{item.type}</div>
            </motion.div>
        </motion.div>
    );
} 