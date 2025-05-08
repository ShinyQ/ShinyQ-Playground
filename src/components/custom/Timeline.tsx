import React, { useState, useMemo } from 'react';
import type { TimelineItem } from '../../data/timeline';
import { formatDate } from '../../utils/date';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineProps {
    items: TimelineItem[];
    filters: { label: string; value: string | null }[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
};

const TimelineItem = ({ item }: { item: TimelineItem }) => (
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
            <div className="mb-4 flex justify-between items-start gap-4">
                <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    {item.caption && (
                        <div className="mb-2 mt-1 text-sm text-foreground/70 italic">
                            {item.caption}
                        </div>
                    )}
                    <div className="text-primary">{item.subtitle}</div>
                </div>
                {item.logo && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm border border-border">
                        <img
                            src={item.logo}
                            alt={`${item.title} logo`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}
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

export default function Timeline({ items, filters }: TimelineProps) {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredItems = useMemo(() => {
        const filtered = activeFilter ? items.filter(item => item.type === activeFilter) : items;
        return filtered.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    }, [items, activeFilter]);

    return (
        <>
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="mb-12"
            >
                <div className="text-sm text-primary font-mono mb-2">// life activities timeline</div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Journey</h1>
                <p className="text-lg text-foreground/80 max-w-3xl">
                    My professional journey, education, and key milestones over the years.
                </p>
            </motion.div>

            {/* Filters */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="mb-10 flex flex-wrap gap-2"
            >
                {filters.map(({ label, value }) => (
                    <Button
                        key={label}
                        variant={activeFilter === value ? "default" : "outline"}
                        onClick={() => setActiveFilter(value)}
                        className="transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/90 hover:to-accent transform hover:scale-105"
                    >
                        {label}
                    </Button>
                ))}
            </motion.div>

            {/* Timeline Items */}
            <div className="relative border-l border-border">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeFilter} 
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible" 
                        className="relative"
                    >
                        {filteredItems.length > 0 ? (
                            filteredItems.map(item => <TimelineItem key={item.id} item={item} />)
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center py-20"
                            >
                                <h3 className="text-xl mb-2">No timeline items found</h3>
                                <p className="text-foreground/70">No items match the selected filter. Try selecting a different category.</p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
} 